package pl.edu.anstar.Esport.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.anstar.Esport.entity.Tournament;
import java.time.LocalDate;
import java.util.List;

public interface TournamentRepository extends JpaRepository<Tournament, Long> {
    List<Tournament> findByTournamentDateAfter(LocalDate date);
}
