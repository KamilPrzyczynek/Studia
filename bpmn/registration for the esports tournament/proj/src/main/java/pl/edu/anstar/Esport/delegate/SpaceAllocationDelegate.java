package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.stereotype.Component;

@Component
public class SpaceAllocationDelegate {

    @ZeebeWorker(type = "spaceAllocation")
    public void handleJob(JobClient client, ActivatedJob job) {
        String allocatedRank = (String) job.getVariablesAsMap().get("rankResult");

        System.out.println("Allocated rank is: " + allocatedRank);


        client.newCompleteCommand(job.getKey()).send().join();
        System.out.println("Job 'spaceAllocation' completed for job key: " + job.getKey());
    }
}
