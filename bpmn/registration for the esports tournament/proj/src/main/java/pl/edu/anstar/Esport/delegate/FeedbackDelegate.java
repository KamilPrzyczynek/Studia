package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.stereotype.Component;

@Component
public class FeedbackDelegate {

    @ZeebeWorker(type = "feedback")
    public void handleJob(JobClient client, ActivatedJob job) {
        String email = (String) job.getVariablesAsMap().get("lolEmail");
        String dc = (String) job.getVariablesAsMap().get("lolDc");
        String rank = (String) job.getVariablesAsMap().get("rankResult");


        String message = String.format("Dziękujemy za zapis!\nPodane dane:\nEmail: %s\nDC: %s\nRanga: %s",
                email, dc, rank);
        System.out.println(message);


        client.newCompleteCommand(job.getKey())
                .send()
                .join();

        System.out.println("Job 'feedback' zakończony dla job key: " + job.getKey());
    }
}
