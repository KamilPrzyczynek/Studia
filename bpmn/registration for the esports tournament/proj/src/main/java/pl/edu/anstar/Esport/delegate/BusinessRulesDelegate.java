package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.stereotype.Component;

@Component
public class BusinessRulesDelegate {

    @ZeebeWorker(type = "businessRules")
    public void handleJob(JobClient client, ActivatedJob job) {
        String rankResult = (String) job.getVariablesAsMap().get("rankResult");
        System.out.println("Wynik DMN decision (rankResult): " + rankResult);
        client.newCompleteCommand(job.getKey()).send().join();
        System.out.println("Job 'businessRules' zakończony dla job key: " + job.getKey());
    }
}
