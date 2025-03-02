package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.edu.anstar.Esport.entity.Tournament;
import pl.edu.anstar.Esport.repository.TournamentRepository;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class CheckingIfAvailableDelegate {

    @Autowired
    private TournamentRepository tournamentRepository;

    @ZeebeWorker(type = "checkingIfAvailable")
    public void handleJob(JobClient client, ActivatedJob job) {
        LocalDate now = LocalDate.now();
        List<Tournament> availableTournaments = tournamentRepository.findByTournamentDateAfter(now);

        boolean placeAvailability = !availableTournaments.isEmpty();
        System.out.println("Checking if available: znaleziono " + availableTournaments.size()
                + " turniejów. placeAvailability = " + placeAvailability);

        Map<String, Object> variables = new HashMap<>();
        variables.put("placeAvailability", placeAvailability);

        client.newCompleteCommand(job.getKey())
                .variables(variables)
                .send()
                .join();

        System.out.println("Job 'checkingIfAvailable' zakończony dla job key: " + job.getKey());
    }
}
