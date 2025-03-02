package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.edu.anstar.Esport.entity.Tournament;
import pl.edu.anstar.Esport.repository.TournamentRepository;

import java.time.LocalDate;
import java.util.List;

@Component
public class IntroductoryInformationDelegate {

    @Autowired
    private TournamentRepository tournamentRepository;

    @ZeebeWorker(type = "introductoryInformation")
    public void handleJob(JobClient client, ActivatedJob job) {
        LocalDate now = LocalDate.now();
        List<Tournament> upcomingTournaments = tournamentRepository.findByTournamentDateAfter(now);

        System.out.println("Nadchodzące turnieje:");
        for (Tournament tournament : upcomingTournaments) {
            System.out.println("Turniej: " + tournament.getName() + " - Data: " + tournament.getTournamentDate());
        }

        client.newCompleteCommand(job.getKey()).send().join();
        System.out.println("Job 'introductoryInformation' zakończony dla job key: " + job.getKey());
    }
}
