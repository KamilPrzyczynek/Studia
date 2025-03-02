package pl.edu.anstar.Esport.delegate;

import io.camunda.zeebe.client.ZeebeClient;
import io.camunda.zeebe.client.api.worker.JobClient;
import io.camunda.zeebe.client.api.response.ActivatedJob;
import io.camunda.zeebe.spring.client.annotation.ZeebeWorker;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

@Component
public class ProvidingEmailDcTierDelegate {

    private final ZeebeClient zeebeClient;

    public ProvidingEmailDcTierDelegate(@Qualifier("zeebeClientLifecycle") ZeebeClient zeebeClient) {
        this.zeebeClient = zeebeClient;
        System.out.println("ProvidingEmailDcTierDelegate zainicjowany");
    }

    @ZeebeWorker(type = "providingEmailDcTeam")
    public void handleJob(JobClient client, ActivatedJob job) {
        System.out.println("Worker 'providingEmailDcTier' uruchomiony dla job key: " + job.getKey());

        Scanner scanner = new Scanner(System.in);

        System.out.print("Podaj email (lolEmail): ");
        String lolEmail = scanner.nextLine();

        System.out.print("Podaj DC (lolDc): ");
        String lolDc = scanner.nextLine();

        System.out.print("Podaj rangę (lolRang): ");
        String lolRang = scanner.nextLine();

        Map<String, Object> variables = new HashMap<>();
        variables.put("lolEmail", lolEmail);
        variables.put("lolDc", lolDc);
        variables.put("lolRang", lolRang);

        System.out.println("Wprowadzone dane: " + variables);

        client.newCompleteCommand(job.getKey())
                .variables(variables)
                .send()
                .join();

        System.out.println("Job 'providingEmailDcTier' zakończony dla job key: " + job.getKey());
    }
}
