# Laboratorium 3 - Model fizyczny odbijającej się piłki

Projekt obejmuje implementację modelu fizycznego piłki spadającej swobodnie i odbijającej się od sprężystego podłoża. Model uwzględnia siły grawitacji, tłumienia oraz sprężystości materiału.

## Opis modelu

Model fizyczny definiują dwa stany opisane równaniami różniczkowymi drugiego rzędu:

1. **Spadek swobodny ($y > R$):**
   $$m\ddot{y} + mg = 0$$

2. **Kontakt z podłożem ($y \le R$):**
   $$m\ddot{y} + f\dot{y} + k(y - R) = mg$$

## Parametry układu
* `m = 0.5 kg` – masa piłki
* `f = 10 Ns/m` – współczynnik tłumienia (strata energii)
* `k = 10 000 N/m` – sztywność podłoża
* `R = 0.1 m` – promień piłki
* `H0 = 1 m` – wysokość początkowa

## Zawartość katalogu

* `setup_model.m` – Skrypt Matlab przygotowujący parametry do symulacji.
* `model_pilka.slx` – Model Simulink wykorzystujący bloki Integrator, Gain oraz Switch do przełączania stanów fizycznych.
* `rysuj.m` – Funkcja wizualizująca animację piłki z dynamicznym odkształceniem (efekt sprężystości) przy kontakcie z ziemią.

## Instrukcja obsługi

1. Uruchom skrypt `setup_model.m`, aby załadować dane do Workspace.
2. Otwórz model Simulink i upewnij się, że w bloku `Integrator` warunek początkowy jest ustawiony na `H0`.
3. W ustawieniach bloku `Scope` (zakładka Logging) zaznacz "Log data to workspace", ustaw nazwę zmiennej na `y` oraz format na `Array`.
4. Uruchom symulację. Po jej zakończeniu funkcja `rysuj` automatycznie wyświetli animację ruchu piłki.

---
*Projekt zrealizowany w ramach przedmiotu Programowanie Obliczeń Inżynierskich.*