# Kurs: Programowanie Systemów Mobilnych

Ten dokument stanowi podsumowanie projektów zrealizowanych w ramach laboratorium Programowania Systemów Mobilnych. Projekty obejmują szeroki zakres funkcjonalności systemu Android – od zaawansowanego interfejsu użytkownika, przez obsługę cyklu życia aplikacji, aż po komunikację z zewnętrznymi serwerami API.

---

##  Wykaz Projektów

### 1. Kalkulator Mobilny (Wielozadaniowy)
Zaawansowany kalkulator obsługujący złożone wyrażenia matematyczne oraz dynamiczną zmianę orientacji ekranu.
* **Główne cechy**:
    * Obsługa trybu portretowego i landscape (osobne layouty).
    * Wykorzystanie biblioteki `mXparser` do obliczania wyrażeń typu `2+2*2`.
    * Pełna obsługa `onSaveInstanceState` – brak utraty danych przy obracaniu telefonu.
    * Design oparty na palecie barw Material Design.

### 2. Monitor Stref Czasowych
Aplikacja zegara czasu rzeczywistego wyświetlająca aktualny czas w różnych lokalizacjach.
* **Główne cechy**:
    * Wykorzystanie mechanizmu `Handler` i `Runnable` do odświeżania czasu co sekundę.
    * Obsługa stref czasowych: Nowy Jork, Londyn, Tokio.
    * Formatowanie dat przy użyciu `SimpleDateFormat`.

### 3. Aplikacja Pogodowa (OpenWeatherMap)
Aplikacja pobierająca dane meteorologiczne w czasie rzeczywistym.
* **Główne cechy**:
    * Komunikacja z API OpenWeatherMap (protokół HTTP).
    * Wykorzystanie biblioteki `Picasso` do dynamicznego ładowania ikon pogodowych.
    * Mechanizm `Pull to Refresh` oraz automatyczne odświeżanie danych co 5 minut.
    * Zapamiętywanie ostatniego miasta za pomocą `Shared Preferences`.

### 4. System Shoutbox (Komunikator REST)
Pełnowymiarowy komunikator oparty na architekturze Navigation Drawer.
* **Główne cechy**:
    * Implementacja pełnego modelu CRUD (GET, POST, PUT, DELETE) dla wiadomości.
    * Logowanie użytkownika (zapis nicku w pamięci urządzenia).
    * Wykorzystanie `RecyclerView` z zaawansowanymi adapterami.
    * Zabezpieczenia: edycja postów możliwa tylko przez autora, kontrola dostępu do Internetu.
    * Personalizacja: Splash Screen, dedykowane fonty i ikony.

---

##  Wykorzystane Technologie

* **Języki**: Java / Kotlin
* **Architektura**: Navigation Drawer, Activity Lifecycle, Fragmenty
* **Sieć**: HTTP GET/POST/PUT/DELETE, obsługa JSON, Retrofit/HttpURLConnection
* **Biblioteki**:
    * `org.mariuszgromada.math:mxparser` (matematyka)
    * `com.squareup.picasso:picasso` (obrazy)
    * `androidx.swiperefreshlayout:swiperefreshlayout` (gesty)
* **Storage**: Shared Preferences (trwałe przechowywanie ustawień)

---

##  Konfiguracja Środowiska

Aby uruchomić projekty z tego kursu:
1. Sklonuj repozytorium do **Android Studio**.
2. Upewnij się, że w pliku `AndroidManifest.xml` dodano uprawnienia:
   ```xml
   <uses-permission android:name="android.permission.INTERNET" />
   <application android:usesCleartextTraffic="true" ... />