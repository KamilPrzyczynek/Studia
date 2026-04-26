const cardColors = ["red","red","green","green","blue","blue","magenta","magenta","yellow","yellow","bisque","bisque","brown","brown","cyan","cyan","orange","orange"];

document.addEventListener("DOMContentLoaded",
    function () {
        let button = document.querySelector(".start");
        let elements = document.querySelectorAll('div');
        elements = [...elements];
        let gamesLeft = cardColors.length / 2;
        let activeCard = '';
        const activeCards = [];
        let timeStart;
        const clickCard = function () {
            activeCard = this;
            if (activeCard === activeCards[0]) return;

            activeCard.classList.remove('hidden');

            if (activeCards.length === 0) {
                activeCards[0] = activeCard;
                return;
            } else {
                elements.forEach(card => card.removeEventListener("click", clickCard));
                activeCards[1] = activeCard;
                    if (activeCards[0].className === activeCards[1].className) {
                        setTimeout(function() {
                            activeCards.forEach(card => card.classList.add("off"));
                            elements = elements.filter(card => !card.classList.contains("off"));
                            gamesLeft--;
                            clean();
                            if(gamesLeft === 0) { endGame(); }
                        }, 500);
                    } else {
                        setTimeout(function() {
                            activeCards.forEach(card => card.classList.add("hidden"));
                            clean();
                        }, 5000);
                    }

                function clean() {
                    activeCard = "";
                    activeCards.length = 0;
                    elements.forEach(card => card.addEventListener("click", clickCard));
                    }
                    function endGame() {
                        let timeFinish = new Date().getTime();
                        let result = timeFinish - timeStart;
                        result /= 1000;
                        let minutes = 0;
                        let stringResult = '';
                        if (result > 60) {
                            minutes = Math.ceil(result / 60);
                            result -= minutes * 60;
                            resultString = minutes + " min " + result + " s";
                        } else resultString = result + " s";
                        localStorage.setItem("czasRozwiazania", resultString);
                        alert("Czas rozwiazania: " + resultString);
                        location.reload();
                    }
            }
        }
        const init = function () {
        elements.forEach(elem => {
            const position = Math.floor(Math.random() * cardColors.length);
                elem.classList.add(cardColors[position]);
                cardColors.splice(position, 1);
            });

        };
        button.addEventListener("click", function () {
            init();

            document.querySelector(".pop").style.display = "none";
            setTimeout(function () {
                elements.forEach(card => {
                    card.classList.add("hidden");
                    card.addEventListener("click", clickCard);
                });
                timeStart = new Date().getTime();
            }, 2000);
        });

    document.querySelector(".wynik").innerHTML = (localStorage.getItem("czasRozwiazania") != null) ? localStorage.getItem("czasRozwiazania") : "Brak";
    });