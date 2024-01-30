# Opis projektu

Ten projekt Reactowy był wykonany w ramach zadania rekrutacyjnego. Poniżej znajdziesz opis funkcjonalności oraz technologii wykorzystanych w tym projekcie.

## Funkcjonalności

1. Strona wypełnia całe okno przeglądarki, eliminując scroll bary poprzez zastosowanie właściwości `vw` i `vh`.
2. Header jest przypięty do góry strony i zawiera link prowadzący do "/".
3. Footer jest przypięty do dołu strony, nie przesuwa się pod zawartością.
4. Alert wyświetla się, jeśli żaden RadioButton nie jest wybrany podczas kliknięcia przycisku "ZASTĄP" lub "DOKLEJ". Wybierając opcję pierwszą dodawana jest wartość z pierwszego obiektu pliku JSON, opcja druga dodaje drugą wartość, a opcja trzecia losuje wartość z zakresu od 3 do 10 obiektu w pliku JSON. Dodatkowo, wartości, które zostały już dodane, są przechowywane w wyjątkach, aby uniknąć ponownego dodania tych samych wartości.
5. Przycisk "Pokaż" wyświetla ramkę z dwiema opcjami. Pierwsza opcja przywraca stronę do ustawień początkowych, czyli usuwa wszystkie dane z lokalnego przechowywania oraz stanu w Redux. Druga opcja wyświetla imię i nazwisko autora w nagłówku.
6. Plik JSON zawiera tablicę z dziesięcioma obiektami, gdzie każdy obiekt ma klucz `id` i `sentence`. Dane z pliku JSON są pobierane za pomocą funkcji asynchronicznej.
7. Projekt nie korzysta z Bootstrapa, Tailwinda ani innych podobnych frameworków.
8. Stylowanie zostało wykonane przy użyciu SCSS.
9. Zaimplementowano responsywność dla mniejszych urządzeń.
10. Projekt został zbudowany w oparciu o framework React.
11. Brak plików graficznych - użyto ikon z Font Awesome.
12. Po najechaniu na napis "CSS IS AWESOME" następuje obrót o 360 stopni.
13. Zastosowano metodologię BEM.
14. Projekt spełnia zasady dostępności (a11y) poprzez odpowiednie użycie tagów HTML (np. `<footer>`, `<header>`) oraz dodanie opisów dla każdej ikony (atrybut `alt`).
15. Stosowano jednostki procentowe zamiast pikseli tam, gdzie było to możliwe.
16. Wartości dodawane do bloku trzeciego są sortowane alfabetycznie.
17. Ramka jest wysuwana po najechaniu na przycisk w footerze, bez użycia JavaScriptu.
18. Wykorzystano lokalne przechowywanie danych (local storage) do zapisu informacji w bloku trzecim.
19. Dodano komponent ładowania, który wyświetla się przez jedną sekundę po uruchomieniu strony, aby upewnić się, że dane z funkcji asynchronicznej zostały pomyślnie pobrane.

## Technologie

- React
- SCSS
- Font Awesome
- JSON
- BEM
- Local Storage

## Uruchomienie

1. Sklonuj repozytorium.
2. Zainstaluj wymagane zależności używając komendy `npm install`.
3. Uruchom projekt poprzez `npm start`.

## Autor

Autor: [Mateusz Otorowski]