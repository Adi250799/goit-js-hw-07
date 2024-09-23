// Znajdź formularz
const form = document.querySelector(".login-form");

// Nasłuchiwanie zdarzenia submit na formularzu
form.addEventListener("submit", (event) => {
    // Zatrzymaj domyślne działanie formularza (przeładowanie strony)
    event.preventDefault();

    // Pobierz wartości z formularza
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();

    // Sprawdź, czy oba pola są wypełnione
    if (email === "" || password === "") {
        alert("All form fields must be filled in");
        return;
    }

    // Utwórz obiekt z wartościami pól
    const formData = {
        email: email,
        password: password,
    };

    // Wypisz obiekt w konsoli
    console.log(formData);

    // Zresetuj formularz
    form.reset();
});
