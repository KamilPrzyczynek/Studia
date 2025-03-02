package pl.edu.anstar.Esport;

import io.camunda.zeebe.client.ZeebeClient;
import io.camunda.zeebe.client.api.response.ProcessInstanceEvent;
import io.camunda.zeebe.spring.client.EnableZeebeClient;
import io.camunda.zeebe.spring.client.annotation.Deployment;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.util.Scanner;

@EnableScheduling
@SpringBootApplication
@EnableZeebeClient
@Deployment(resources = "classpath*:/model/*.*")
public class esportstournamentProcessApplication implements CommandLineRunner {

    private final ZeebeClient zeebeClient;

    public esportstournamentProcessApplication(@Qualifier("zeebeClientLifecycle") ZeebeClient zeebeClient) {
        this.zeebeClient = zeebeClient;
    }

    public static void main(String[] args) {
        SpringApplication.run(esportstournamentProcessApplication.class, args);
    }

    @Override
    public void run(String... args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println();
        System.out.println();

        System.out.print("Dzień Dobry.Zapisy na truniej e-sportowy Lol . Naciśnij Enter, aby rozpocząć: ");
        String input = scanner.nextLine();

        if (input.isEmpty()) {
            try {
                ProcessInstanceEvent processInstance = zeebeClient
                        .newCreateInstanceCommand()
                        .bpmnProcessId("Process_17nuch1")
                        .latestVersion()
                        .send()
                        .join();

                System.out.println();
                System.out.println(processInstance.getProcessInstanceKey());
            } catch (Exception e) {
                System.err.println(e.getMessage());
            }
        } else {
            System.out.println("Błąd Procesu");
        }
    }
}