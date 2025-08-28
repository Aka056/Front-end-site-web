/* ajouter une ombre sur la nav quand on scroll */

window.onscroll = function () {
    headerShadow();
};

function headerShadow() {
    const navHeader = document.getElementById("navTop");

    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        navHeader.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.3)";
        navHeader.style.height = "75px";
        navHeader.style.lineHeight = "75px";
        navHeader.style.backdropFilter = "blur(35px)";
        navHeader.style.border = "2px solid rgba(255, 255, 255, 0.3)";
        navHeader.style.margin = "0% 1%";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
        navHeader.style.backdropFilter = "none";
        navHeader.style.border = "none";
        navHeader.style.margin = "2% 1%";
    }
}

// on sélectionne le lien et la card de cookies
const cookieManagementLink = document.getElementById("cookie-management");
const cookieBox = document.querySelector(".cookie-card"),
    actions = document.querySelectorAll(".buttonC");

// on ajoute un gestionnaire d'événements au lien "Gestion des cookies"
cookieManagementLink.addEventListener("click", (event) => {
    event.preventDefault(); // on empêche le comportement par défaut du lien
    cookieBox.classList.add("show"); // on ajouter la classe "show" pour afficher la card
    actions.forEach((buttonC) => {
        buttonC.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if (buttonC.id == "accept") {
                //on programme les cookies pour 1 mois :    60s = 1min, 60min = 1heure, 24h = 1 jour, 30 = 30 jours.
                document.cookie =
                    "cookieBy = CesiTonStage; max-age=" + 60 * 60 * 24 * 30;
            } else if (buttonC.id == "decline") {
                // On supprime les cookies en les réglant avec une date d'expiration passée
                document.cookie = "cookieBy=CesiTonStage; max-age=0";
            }
        });
    });
});

const executeCodes = () => {
    if (document.cookie.includes("CesiTonStage")) return; //pour faire en sorte que une fois qu'on accepte les cookies mm si on recharge la page on aura pas acppeter une deuxieme fois notre choix précédent reste sauvegarder, mais quand tu refuse on te redemande a chaque reload de la page j'usqu'a ce que tu accepte.
    cookieBox.classList.add("show");

    actions.forEach((buttonC) => {
        buttonC.addEventListener("click", () => {
            cookieBox.classList.remove("show");

            if (buttonC.id == "accept") {
                //on programme les cookies pour 1 mois :    60s = 1min, 60min = 1heure, 24h = 1 jour, 30 = 30 jours.
                document.cookie =
                    "cookieBy = CesiTonStage; max-age=" + 60 * 60 * 24 * 30;
            }
        });
    });
};
window.addEventListener("load", executeCodes);

document.addEventListener("DOMContentLoaded", function () {
    const burgerIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menuTop");

    // Afficher/Masquer le menu au clic sur l’icône burger
    burgerIcon.addEventListener("click", function () {
        menu.classList.add("show");
    });

    // Fermer le menu en cliquant en dehors
    window.addEventListener("click", function (event) {
        if (
            event.target !== menu &&
            event.target !== burgerIcon &&
            !burgerIcon.contains(event.target)
        ) {
            menu.classList.remove("show");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (event) {
        let isValid = true;
        passwordError.textContent = "";

        // Vérification des mots de passe
        if (password.value !== confirmPassword.value) {
            passwordError.textContent =
                "Les mots de passe ne correspondent pas.";
            isValid = false;
        }

        // Vérification de la complexité du mot de passe
        const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/;
        if (!passwordPattern.test(password.value)) {
            passwordError.textContent +=
                "\nLe mot de passe doit contenir au moins 6 caractères, une majuscule, un chiffre et un symbole.";
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Empêche l'envoi du formulaire si une erreur est présente
        }
    });
});



    document.addEventListener("DOMContentLoaded", function () {
    const btnToggle = document.getElementById("toggleConnexion");
    const modalOverlay = document.getElementById("modalOverlay");
    const btnClose = document.getElementById("closeConnexion");
    const loginForm = document.getElementById("loginForm");

    if (btnToggle && modalOverlay && btnClose && loginForm) {
        btnToggle.addEventListener("click", function () {
            modalOverlay.classList.remove("hidden");
        });

        btnClose.addEventListener("click", function () {
            modalOverlay.classList.add("hidden");
        });

        window.addEventListener("click", function (event) {
            if (event.target === modalOverlay) {
                modalOverlay.classList.add("hidden");
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                modalOverlay.classList.add("hidden");
            }
        });

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const formData = new FormData(loginForm);
            
            fetch("{{ route('login') }}", {
                method: "POST",
                headers: {
                    "X-CSRF-TOKEN": document.querySelector('input[name="_token"]').value,
                    "Accept": "application/json"
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    document.getElementById("error-email").innerText = data.errors.email ?? "";
                    document.getElementById("error-password").innerText = data.errors.password ?? "";
                } else if (data.success) {
                    window.location.href = "{{ route('dashboard') }}";
                } else {
                    document.getElementById("loginError").innerText = "Identifiants incorrects.";
                }
            })
            // .catch(error => console.error("Erreur:", error)); à revoir 
        });
    }
    });

    document.addEventListener("DOMContentLoaded", function () {
    const btnToggle = document.getElementById("toggleConnexion2");
    const modalOverlay = document.getElementById("modalOverlay");
    const btnClose = document.getElementById("closeConnexion");
    const loginForm = document.getElementById("loginForm");

    if (btnToggle && modalOverlay && btnClose && loginForm) {
        btnToggle.addEventListener("click", function () {
            modalOverlay.classList.remove("hidden");
        });

        btnClose.addEventListener("click", function () {
            modalOverlay.classList.add("hidden");
        });

        window.addEventListener("click", function (event) {
            if (event.target === modalOverlay) {
                modalOverlay.classList.add("hidden");
            }
        });

        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                modalOverlay.classList.add("hidden");
            }
        });

        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const formData = new FormData(loginForm);
            
            fetch("{{ route('login') }}", {
                method: "POST",
                headers: {
                    "X-CSRF-TOKEN": document.querySelector('input[name="_token"]').value,
                    "Accept": "application/json"
                },
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.errors) {
                    document.getElementById("error-email").innerText = data.errors.email ?? "";
                    document.getElementById("error-password").innerText = data.errors.password ?? "";
                } else if (data.success) {
                    window.location.href = "{{ route('dashboard') }}";
                } else {
                    document.getElementById("loginError").innerText = "Identifiants incorrects.";
                }
            })
            // .catch(error => console.error("Erreur:", error)); à revoir 
        });
    }
    });
