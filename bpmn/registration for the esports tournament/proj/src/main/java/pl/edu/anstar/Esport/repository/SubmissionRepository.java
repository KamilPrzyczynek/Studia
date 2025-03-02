package pl.edu.anstar.Esport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.anstar.Esport.entity.Submission;

public interface SubmissionRepository extends JpaRepository<Submission, Long> {
}
