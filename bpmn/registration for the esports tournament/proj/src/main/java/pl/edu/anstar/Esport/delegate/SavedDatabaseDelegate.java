package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import pl.edu.anstar.Esport.entity.Submission;
import pl.edu.anstar.Esport.repository.SubmissionRepository;

import java.util.Map;

@Component
public class SavedDatabaseDelegate {

    @Autowired
    private SubmissionRepository submissionRepository;

    @ZeebeWorker(type = "savedDatabase")
    public void handleJob(JobClient client, ActivatedJob job) {
        Map<String, Object> variables = job.getVariablesAsMap();
        String lolEmail = (String) variables.get("lolEmail");
        String lolDc = (String) variables.get("lolDc");

        Integer score = null;
        Object lolRangObj = variables.get("lolRang");
        if (lolRangObj instanceof String) {
            try {
                score = Integer.parseInt((String) lolRangObj);
            } catch (NumberFormatException e) {
                System.err.println("Nie udało się przekonwertować lolRang: " + lolRangObj);
            }
        } else if (lolRangObj instanceof Number) {
            score = ((Number) lolRangObj).intValue();
        }

        Boolean placeAvailability = (Boolean) variables.get("placeAvailability");
        String rankResult = (String) variables.get("rankResult");

        Submission submission = new Submission();
        submission.setLolEmail(lolEmail);
        submission.setLolDc(lolDc);
        submission.setScore(score);
        submission.setPlaceAvailability(placeAvailability);
        submission.setRankResult(rankResult);

        submissionRepository.save(submission);
        System.out.println("Zapisano zgłoszenie w bazie: " + submission);

        client.newCompleteCommand(job.getKey()).send().join();
    }
}
