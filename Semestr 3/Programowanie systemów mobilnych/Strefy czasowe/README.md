# Programowanie Systemów Mobilnych - Laboratorium

Repozytorium zawiera projekty zrealizowane w ramach zajęć z systemów mobilnych, skupiające się na obsłudze czasu, stref czasowych oraz komunikacji z zewnętrznymi interfejsami API przy użyciu protokołu HTTP.

## 1. Strefy Czasowe i Obsługa Czasu

Pierwsza część projektu koncentruje się na dynamicznym wyświetlaniu czasu w różnych lokalizacjach geograficznych.

### Funkcjonalności:
* Wyświetlanie aktualnego czasu lokalnego z dokładnością do sekundy.
* Wyświetlanie aktualnego czasu dla wybranych stref czasowych: Nowy Jork (America/New_York), Londyn (Europe/London) oraz Tokio (Asia/Tokyo).
* Automatyczne odświeżanie zegarów co 1000ms (1 sekunda) przy użyciu mechanizmu Handler i Runnable.

### Kluczowe komponenty:
* **MainActivity**: Ekran główny z nawigacją do modułu czasu.
* **MainTimeactivity**: Aktywność odpowiedzialna za logikę zegarów i formatowanie daty (SimpleDateFormat).

---

## 2. Aplikacja Pogodowa - Obsługa Protokołu HTTP

Druga część to rozbudowana aplikacja pobierająca dane pogodowe w czasie rzeczywistym z serwisu OpenWeatherMap.

### Zadania i Realizacja:
* **Komunikacja HTTP**: Wykorzystanie zapytań GET do pobierania danych w formacie JSON dla konkretnych miast.
* **Obsługa aktywności**: Przekazywanie nazw miast wpisanych przez użytkownika z MainActivity do WeatherActivity za pomocą obiektu Intent.
* **Shared Preferences**: Trwałe zapisywanie ostatnio wyszukanego poprawnego miasta, dzięki czemu aplikacja pamięta wybór użytkownika po ponownym uruchomieniu.
* **Zabezpieczenia**: Mechanizmy sprawdzania poprawności nazw miast oraz blokada wyszukiwania w przypadku braku połączenia z Internetem.

### Zaawansowane funkcje:
* **Pull to Refresh**: Implementacja gestu przeciągnięcia w dół w celu manualnego odświeżenia pogody.
* **Automatyczne odświeżanie**: System automatycznej aktualizacji danych pogodowych w określonych interwałach czasowych (np. co 5 minut).
* **Obsługa Mediów**: Wykorzystanie biblioteki Picasso do pobierania i wyświetlania ikon pogodowych bezpośrednio z serwerów OpenWeatherMap.
* **Cleartext Traffic**: Konfiguracja zabezpieczeń sieciowych pozwalająca na komunikację z serwerami HTTP.

---

## Technologie i Biblioteki

* **Język**: Java (Android SDK)
* **UI**: XML (ConstraintLayout, SwipeRefreshLayout)
* **Sieć**: HTTP GET, JSON
* **Zewnętrzne biblioteki**: 
    - **Picasso**: Ładowanie obrazów z sieci.
    - **OpenWeatherMap API**: Źródło danych meteorologicznych.

---

## Instrukcja Uruchomienia

1. Sklonuj repozytorium do Android Studio.
2. Upewnij się, że urządzenie/emulator ma dostęp do Internetu.
3. W przypadku problemów z połączeniem HTTP, sprawdź flagę `android:usesCleartextTraffic="true"` w pliku AndroidManifest.xml.
4. Aby korzystać z pogody, wymagane jest połączenie z API OpenWeatherMap (klucz APPID zawarty w kodzie).