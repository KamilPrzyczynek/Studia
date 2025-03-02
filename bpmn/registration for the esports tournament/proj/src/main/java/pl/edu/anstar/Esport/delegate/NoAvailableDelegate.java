package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.stereotype.Component;

@Component
public class NoAvailableDelegate {

    @ZeebeWorker(type = "noAvailable")
    public void handleJob(JobClient client, ActivatedJob job) {
        System.out.println("Brak dostępnych miejsc – placeAvailability=false. Nie ma wolnych miejsc.");

        client.newCompleteCommand(job.getKey()).send().join();
        System.out.println("Job 'noAvailable' zakończony dla job key: " + job.getKey());
    }
}
