# registration for the esports tournament  

Conceptual design (“Header Top” style).
Project description (“Header Middle” style)
Projekt "Rejestracja na turniej e-sportowy LOL" to kompleksowe rozwiązanie mające na celu automatyzację procesu zapisu zawodników na turnieje e-sportowe. System został zaprojektowany w oparciu o technologie BPMN i Zeebe, co umożliwia modelowanie i automatyzację kolejnych etapów rejestracji.

List of processes.
Introductory Information
Providing Email DC Tier
Checking if It Is Available
Application of Business Rules
No Available
Space Allocation
Saved in the Database
Feedback:
Description of processes.


“Introductory Information:”.
Wyświetla nadchodzące turnieje pobrane z bazy danych.

“Providing Email DC Tier:”.
Zbiera dane użytkownika – email, identyfikator DC oraz wartość (score) służącą do określenia rangi.
“Checking if It Is Available”.
Sprawdza, czy w bazie danych dostępne są turnieje (ustawia zmienną placeAvailability jako true lub false).
“Application of Business Rules”.
Wykorzystuje decyzję DMN (decision-ranks) do przydzielenia odpowiedniej rangi na podstawie score (lolRang).

“No Available”.
Obsługuje sytuację, gdy nie ma dostępnych miejsc (placeAvailability=false) – wypisuje komunikat, że nie ma wolnych miejsc.

“Space Allocation”.
Wyświetla przydzieloną rangę (wynik DMN – rankResult) dla użytkownika..
“Saved in the Database”.
Zapisuje zgłoszenie, czyli dane (lolEmail, lolDc, score, rankResult, placeAvailability) do bazy danych w tabeli zgloszenia.

“Feedback”.
Wyświetla podsumowanie zapisu z podanymi danymi (email, DC, ranga) oraz komunikat "Dziękujemy za zapis".

Business process models design.




Business processes and rules implementation.
dołączam do projektu

Testing and optimization of business processes.
Introductory Information

Test: Sprawdzenie, czy wyświetlane są wszystkie nadchodzące turnieje pobrane z bazy danych.
Optymalizacja: Upewnienie się, że zapytanie do bazy danych jest zoptymalizowane, a wynik nie powoduje opóźnień przy dużej liczbie rekordów.
Providing Email DC Tier

Test: Weryfikacja poprawności pobierania danych od użytkownika (email, DC, score) oraz walidacja wprowadzonych wartości.
Optymalizacja: Uproszczenie interakcji, automatyczna walidacja danych (np. format emaila) przed przesłaniem do procesu.
Checking if It Is Available

Test: Potwierdzenie, że zmienna placeAvailability jest ustawiana na true lub false w zależności od obecności turniejów.
Optymalizacja: Minimalizacja liczby zapytań do bazy danych przez buforowanie lub indeksowanie kolumn daty turnieju.
Application of Business Rules

Test: Uruchomienie reguł DMN z różnymi wartościami score i weryfikacja, czy przypisywana ranga odpowiada oczekiwaniom.
Optymalizacja: Upewnienie się, że decyzje DMN są przetestowane dla pełnego zakresu wartości wejściowych i nie występują konflikty w regułach.
No Available

Test: Symulacja sytuacji braku dostępnych miejsc (placeAvailability = false) i sprawdzenie, czy komunikat o niedostępności jest wyświetlany.
Optymalizacja: Dodanie logiki informującej użytkownika o alternatywnych terminach lub umożliwienie ponownego wyboru daty.
Space Allocation

Test: Sprawdzenie, czy przydzielona ranga (wynik DMN – rankResult) jest poprawnie odczytywana i wyświetlana użytkownikowi.
Optymalizacja: Upewnienie się, że komunikaty są czytelne i responsywne, a system właściwie przekazuje dane między kolejnymi krokami.
Saved in the Database

Test: Weryfikacja, czy wszystkie dane zgłoszenia (lolEmail, lolDc, score, rankResult, placeAvailability) są poprawnie zapisywane w tabeli w bazie danych.
Optymalizacja: Monitorowanie wydajności zapisu oraz wprowadzenie mechanizmów backupu i replikacji danych, aby zapewnić bezpieczeństwo zgłoszeń.
Feedback

Test: Potwierdzenie, że na końcu procesu użytkownik otrzymuje komunikat potwierdzający zapis z wyświetlonymi danymi (email, DC, ranga).
Optymalizacja: Ulepszenie interfejsu feedbacku, aby komunikat był bardziej czytelny i mógł być wykorzystany do dalszych powiadomień (np. e-mail confirmation).
