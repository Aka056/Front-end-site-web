document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        let hasError = false;
        const inputs = form.querySelectorAll("input");

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.classList.add("error");
                hasError = true;
            } else {
                input.classList.remove("error");
            }
        });

        if (!hasError) {
            form.submit();
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const resetForm = document.getElementById("resetPasswordForm");

    resetForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const emailField = document.getElementById("email");

        if (emailField.value.trim() === "") {
            alert("Veuillez entrer une adresse email !");
            emailField.focus();
            return;
        }

        alert("Un e-mail de réinitialisation a été envoyé si cette adresse est enregistrée.");
        window.location.href = "connexion.html"; 
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const offers = [
        { title: "Développeur Web Front-End", company: "TechCorp", location: "Paris", duration: "6 mois", competence: "Développement Web", date: "2025-02-23" },
        { title: "Data Analyst", company: "DataVision", location: "Lyon", duration: "4 mois", competence: "Data Analyst", date: "2025-02-20" },
        { title: "Ingénieur Réseau", company: "NetSolutions", location: "Marseille", duration: "5 mois", competence: "Réseaux", date: "2025-02-18" },
        { title: "Développeur Back-End", company: "CodeFactory", location: "Bordeaux", duration: "6 mois", competence: "Développement Web", date: "2025-02-15" },
        { title: "Développeur Web Full-Stack", company: "WebSolutions", location: "Toulouse", duration: "5 mois", competence: "Développement Web", date: "2025-02-10" },
        { title: "Ingénieur Système", company: "SysVision", location: "Nantes", duration: "4 mois", competence: "Systèmes", date: "2025-02-05" },
        { title: "Développeur Mobile", company: "AppFactory", location: "Rennes", duration: "6 mois", competence: "Développement Mobile", date: "2025-02-01" },
        { title: "Développeur Web Front-End", company: "TechCorp", location: "Paris", duration: "6 mois", competence: "Développement Web", date: "2025-02-23" },
        { title: "Data Analyst", company: "DataVision", location: "Lyon", duration: "4 mois", competence: "Data Analyst", date: "2025-02-20" },
        { title: "Ingénieur Réseau", company: "NetSolutions", location: "Marseille", duration: "5 mois", competence: "Réseaux", date: "2025-02-18" },
        { title: "Développeur Back-End", company: "CodeFactory", location: "Bordeaux", duration: "6 mois", competence: "Développement Web", date: "2025-02-15" },
        { title: "Développeur Web Full-Stack", company: "WebSolutions", location: "Toulouse", duration: "5 mois", competence: "Développement Web", date: "2025-02-10" },
        { title: "Ingénieur Système", company: "SysVision", location: "Nantes", duration: "4 mois", competence: "Systèmes", date: "2025-02-05" },
        { title: "Développeur Mobile", company: "AppFactory", location: "Rennes", duration: "6 mois", competence: "Développement Mobile", date: "2025-02-01" },
        { title: "Ingénieur Cloud", company: "CloudSolutions", location: "Lille", duration: "5 mois", competence: "Cloud", date: "2025-01-28" }
    ];

    function getLatestOffers() {
        return offers.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
    }

    function displayOffers(offers, container) {
        container.innerHTML = "";
        offers.forEach(offer => {
            const offerCard = document.createElement("div");
            offerCard.classList.add("offer-card");
            offerCard.innerHTML = `
                <h3>${offer.title}</h3>
                <p><strong>Entreprise:</strong> ${offer.company}</p>
                <p><strong>Localisation:</strong> ${offer.location}</p>
                <p><strong>Durée:</strong> ${offer.duration}</p>
                <p><strong>Date de publication:</strong> ${offer.date}</p>
                <div class="offer-actions">
                    <a href="#">Voir l'offre</a>
                    <span class="fav-icon"><i class="far fa-heart"></i></span>
                </div>
            `;
            container.appendChild(offerCard);
        });

        const favIcons = document.querySelectorAll(".fav-icon");
        favIcons.forEach(icon => {
            icon.addEventListener("click", function () {
                this.classList.toggle("favorited");
                const offerTitle = this.closest(".offer-card").querySelector("h3").innerText;
                if (this.classList.contains("favorited")) {
                    addToFavorites(offerTitle);
                } else {
                    removeFromFavorites(offerTitle);
                }
            });
        });
    }

    function addToFavorites(offerTitle) {
        console.log(`Ajouté aux favoris: ${offerTitle}`);
    }

    function removeFromFavorites(offerTitle) {
        console.log(`Retiré des favoris: ${offerTitle}`);
    }

    const latestOffersContainer = document.getElementById("latest-offers-container");
    if (latestOffersContainer) {
        const latestOffers = getLatestOffers();
        displayOffers(latestOffers, latestOffersContainer);
    }

    const offersContainer = document.getElementById("offers-container");
    if (offersContainer) {
        displayOffers(offers, offersContainer);
    }
});


document.getElementById("search-btn").addEventListener("click", function () {
    const searchQuery = document.getElementById("search-input").value;
    const selectedLocation = document.getElementById("location-filter").value;
    const selectedDuration = document.getElementById("duration-filter").value;
    const selectedCompetence = document.getElementById("competence-filter").value;

    let url = `offres.html?search=${encodeURIComponent(searchQuery)}`;
    if (selectedLocation) url += `&location=${encodeURIComponent(selectedLocation)}`;
    if (selectedDuration) url += `&duration=${encodeURIComponent(selectedDuration)}`;
    if (selectedCompetence) url += `&competence=${encodeURIComponent(selectedCompetence)}`;

    window.location.href = url;
});

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");
    const selectedLocation = urlParams.get("location");
    const selectedDuration = urlParams.get("duration");
    const selectedCompetence = urlParams.get("competence");

    const offers = [
        { title: "Développeur Web Front-End", company: "TechCorp", location: "Paris", duration: "6 mois", competence: "Développement Web", date: "2025-02-23" },
        { title: "Data Analyst", company: "DataVision", location: "Lyon", duration: "4 mois", competence: "Data Analyst", date: "2025-02-20" },
        { title: "Ingénieur Réseau", company: "NetSolutions", location: "Marseille", duration: "5 mois", competence: "Réseaux", date: "2025-02-18" },
        { title: "Développeur Back-End", company: "CodeFactory", location: "Bordeaux", duration: "6 mois", competence: "Développement Web", date: "2025-02-15" },
        { title: "Développeur Web Full-Stack", company: "WebSolutions", location: "Toulouse", duration: "5 mois", competence: "Développement Web", date: "2025-02-10" },
        { title: "Ingénieur Système", company: "SysVision", location: "Nantes", duration: "4 mois", competence: "Systèmes", date: "2025-02-05" },
        { title: "Développeur Mobile", company: "AppFactory", location: "Rennes", duration: "6 mois", competence: "Développement Mobile", date: "2025-02-01" },
        { title: "Développeur Web Front-End", company: "TechCorp", location: "Paris", duration: "6 mois", competence: "Développement Web", date: "2025-02-23" },
        { title: "Data Analyst", company: "DataVision", location: "Lyon", duration: "4 mois", competence: "Data Analyst", date: "2025-02-20" },
        { title: "Ingénieur Réseau", company: "NetSolutions", location: "Marseille", duration: "5 mois", competence: "Réseaux", date: "2025-02-18" },
        { title: "Développeur Back-End", company: "CodeFactory", location: "Bordeaux", duration: "6 mois", competence: "Développement Web", date: "2025-02-15" },
        { title: "Développeur Web Full-Stack", company: "WebSolutions", location: "Toulouse", duration: "5 mois", competence: "Développement Web", date: "2025-02-10" },
        { title: "Ingénieur Système", company: "SysVision", location: "Nantes", duration: "4 mois", competence: "Systèmes", date: "2025-02-05" },
        { title: "Développeur Mobile", company: "AppFactory", location: "Rennes", duration: "6 mois", competence: "Développement Mobile", date: "2025-02-01" },

    ];

    const offersContainer = document.getElementById("offers-container");

    function displayFilteredOffers() {
        offersContainer.innerHTML = "";
        const filteredOffers = offers.filter(offer => {
            return (
                (!searchQuery || offer.title.toLowerCase().includes(searchQuery.toLowerCase())) &&
                (!selectedLocation || offer.location === selectedLocation) &&
                (!selectedDuration || offer.duration === selectedDuration) &&
                (!selectedCompetence || offer.competence === selectedCompetence)
            );
        });

        if (filteredOffers.length === 0) {
            offersContainer.innerHTML = "<p>Aucune offre trouvée.</p>";
            return;
        }

        filteredOffers.forEach(offer => {
            const offerCard = document.createElement("div");
            offerCard.classList.add("offer-card");
            offerCard.innerHTML = `
                <h3>${offer.title}</h3>
                <p><strong>Entreprise:</strong> ${offer.company}</p>
                <p><strong>Localisation:</strong> ${offer.location}</p>
                <p><strong>Durée:</strong> ${offer.duration}</p>
                <p><strong>Date de publication:</strong> ${offer.date}</p>
                <a href="#">Voir l'offre</a>
            `;
            offersContainer.appendChild(offerCard);
        });
    }

    displayFilteredOffers();
});


document.addEventListener("DOMContentLoaded", function () {
    const favIcons = document.querySelectorAll(".fav-icon");

    favIcons.forEach(icon => {
        icon.addEventListener("click", function () {
            this.classList.toggle("favorited");
            const offerTitle = this.closest(".offer-card").querySelector("h3").innerText;
            if (this.classList.contains("favorited")) {
                addToFavorites(offerTitle);
            } else {
                removeFromFavorites(offerTitle);
            }
        });
    });

    function addToFavorites(offerTitle) {
        console.log(`Ajouté aux favoris: ${offerTitle}`);
    }

    function removeFromFavorites(offerTitle) {
        console.log(`Retiré des favoris: ${offerTitle}`);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const favoriteIcons = document.querySelectorAll(".fav-icon");

    favoriteIcons.forEach(icon => {
        icon.addEventListener("click", function() {
            const offerCard = this.closest(".offer-card");
            const offerTitle = offerCard.querySelector("h3").textContent;

            if (this.classList.contains("favorited")) {
                this.classList.remove("favorited");
                this.innerHTML = '<i class="far fa-heart"></i>';
                removeFromFavorites(offerTitle);
            } else {
                this.classList.add("favorited");
                this.innerHTML = '<i class="fas fa-heart" style="color: red;"></i>';
                saveToFavorites(offerTitle);
            }
        });
    });

    function saveToFavorites(title) {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (!favorites.includes(title)) {
            favorites.push(title);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            displayFavorites();
        }
    }

    function removeFromFavorites(title) {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites = favorites.filter(item => item !== title);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        displayFavorites();
    }

    function displayFavorites() {
        const favorisSection = document.querySelector(".favoris-list");
        favorisSection.innerHTML = ""; 

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        if (favorites.length === 0) {
            favorisSection.innerHTML = "<p>Aucun favori enregistré.</p>";
            return;
        }

        favorites.forEach(title => {
            const div = document.createElement("div");
            div.classList.add("candidature-card");
            div.innerHTML = `<h3>${title}</h3><p>Offre sauvegardée</p>`;
            favorisSection.appendChild(div);
        });
    }

    displayFavorites();
});


/*evaluer-entreprise*/
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
  
    stars.forEach(star => {
      star.addEventListener("click", function () {
        const parent = this.parentElement;
        const ratingValue = this.getAttribute("data-value");
        const companyCard = this.closest(".company-card");
        const resultText = companyCard.querySelector(".rating-result");
  
        parent.querySelectorAll(".star").forEach(s => {
          s.classList.remove("active");
        });
  
        for (let i = 0; i < ratingValue; i++) {
          parent.children[i].classList.add("active");
        }
  
        resultText.textContent = `Note attribuée : ${ratingValue}/5`;
      });
    });
  });
  
  /*menu deroulant */ 
  function toggleEntreprisesDropdown(event) {
    event.stopPropagation();
    let menu = document.getElementById("entreprisesMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

function togglePilotesDropdown(event) {
    event.stopPropagation();
    let menu = document.getElementById("pilotesMenu");
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
}

document.addEventListener("click", function () {
    document.getElementById("entreprisesMenu").style.display = "none";
    document.getElementById("pilotesMenu").style.display = "none";
});

/*modifize pilote*/
function updatePilote() {
    alert("Le pilote a été mis à jour avec succès !");
  }

  /*modifier entreprise*/
  function loadCompanyData() {
    let selectedCompany = document.getElementById("selectCompany").value;
    let companyData = {
      "CESI": { name: "CESI", sector: "Éducation", address: "10 rue de la Science, Paris", description: "École d'ingénieurs" },
      "Safran": { name: "Safran", sector: "Industrie", address: "5 avenue de l'Aérospatiale, Toulouse", description: "Leader en aéronautique" },
      "BNP Paribas": { name: "BNP Paribas", sector: "Finance", address: "1 boulevard Haussmann, Paris", description: "Banque internationale" },
      "Amazon": { name: "Amazon", sector: "Technologie", address: "12 avenue du Commerce, Lyon", description: "Leader du e-commerce" },
      "Google": { name: "Google", sector: "Technologie", address: "1600 Amphitheatre Parkway, USA", description: "Moteur de recherche et innovation" }
    };

    if (companyData[selectedCompany]) {
      document.getElementById("companyName").value = companyData[selectedCompany].name;
      document.getElementById("companySector").value = companyData[selectedCompany].sector;
      document.getElementById("companyAddress").value = companyData[selectedCompany].address;
      document.getElementById("companyDescription").value = companyData[selectedCompany].description;
    }
  }

  function updateCompany() {
    alert("L'entreprise a été mise à jour avec succès !");
  }

  /*recherche entreprise*/
  const pilotes = {
    "Jean Dupont": {
      email: "Jean.dupont@email.com",
      tel: "0601020304",
      formation: "CPI A2",
      campus: "Nanterre"
    },
    "Sarah Ben": {
      email: "sarah@email.com",
      tel: "0604050607",
      formation: "A3",
      campus: "Orléans"
    }
  };

  function rechercherPilote() {
    const nom = document.getElementById("rechercheNom").value.trim();
    const resultat = document.getElementById("resultatRecherche");

    if (pilotes[nom]) {
      const p = pilotes[nom];
      resultat.innerHTML = `
        <strong>Nom :</strong> ${nom}<br>
        <strong>Email :</strong> ${p.email}<br>
        <strong>Téléphone :</strong> ${p.tel}<br>
        <strong>Formation :</strong> ${p.formation}<br>
        <strong>Campus :</strong> ${p.campus}
      `;
      resultat.style.display = "block";
    } else {
      resultat.innerHTML = "<em>Aucun pilote trouvé avec ce nom.</em>";
      resultat.style.display = "block";
    }
  }

  /*supprimer entreprise*/
  function confirmDelete() {
    let company = document.getElementById("selectCompany").value;
    let confirmation = confirm("Voulez-vous vraiment supprimer " + company + " ?");
    
    if (confirmation) {
      alert(company + " a été supprimé avec succès !");
      // Ici, tu peux ajouter un appel à une API ou une mise à jour de la base de données
    }
  }

  /*supprimer pilote*/
  function confirmDeletePilote() {
    let pilote = document.getElementById("selectPilote").value;
    let confirmation = confirm("Voulez-vous vraiment supprimer le pilote " + pilote + " ?");
    
    if (confirmation) {
      alert(pilote + " a été supprimé avec succès !");
      // Ici on peut ajouter la suppression côté base de données ou API
    }
  }

  /*evaluer entreprise*/
  document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");

    stars.forEach(star => {
      star.addEventListener("click", function () {
        const parent = this.parentElement;
        const ratingValue = this.getAttribute("data-value");
        const companyCard = this.closest(".company-card");
        const resultText = companyCard.querySelector(".rating-result");

        parent.querySelectorAll(".star").forEach(s => {
          s.classList.remove("active");
        });

        for (let i = 0; i < ratingValue; i++) {
          parent.children[i].classList.add("active");
        }

        resultText.textContent = `Note attribuée : ${ratingValue}/5`;
      });
    });
  });

  /*responsive design*/
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
  }
  