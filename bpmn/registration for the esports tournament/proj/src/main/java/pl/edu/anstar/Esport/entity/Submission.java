package pl.edu.anstar.Esport.entity;

import javax.persistence.*;

@Entity
@Table(name = "zgloszenia", schema = "esport")
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="lol_email")
    private String lolEmail;

    @Column(name="lol_dc")
    private String lolDc;

    @Column(name="score")
    private Integer score;

    @Column(name="rank_result")
    private String rankResult;

    @Column(name="place_availability")
    private Boolean placeAvailability;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLolEmail() {
        return lolEmail;
    }

    public void setLolEmail(String lolEmail) {
        this.lolEmail = lolEmail;
    }

    public String getLolDc() {
        return lolDc;
    }

    public void setLolDc(String lolDc) {
        this.lolDc = lolDc;
    }

    public Integer getScore() {
        return score;
    }

    public void setScore(Integer score) {
        this.score = score;
    }

    public String getRankResult() {
        return rankResult;
    }

    public void setRankResult(String rankResult) {
        this.rankResult = rankResult;
    }

    public Boolean getPlaceAvailability() {
        return placeAvailability;
    }

    public void setPlaceAvailability(Boolean placeAvailability) {
        this.placeAvailability = placeAvailability;
    }

    @Override
    public String toString() {
        return "Submission{" +
                "id=" + id +
                ", lolEmail='" + lolEmail + '\'' +
                ", lolDc='" + lolDc + '\'' +
                ", score=" + score +
                ", rankResult='" + rankResult + '\'' +
                ", placeAvailability=" + placeAvailability +
                '}';
    }
}
