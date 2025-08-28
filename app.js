/*  ---------------------------------- CHANGE ACTIVE LINK ------------------------------------------------------*/
document.addEventListener("DOMContentLoaded", (event) => {
    const navLinks = document.querySelectorAll("#navTop .nav-link");
    const contactLink = document.querySelector(
        '#navTop .nav-link[href="#contact"]'
    );
    const contactSection = document.querySelector("#contact");
    const accueilLink = document.querySelector(
        '#navTop .nav-link[href="#accueil"]'
    );
    const accueilSection = document.querySelector("#Principal");

    if (!contactLink || !contactSection || !accueilLink || !accueilSection) {
        console.error("Un ou plusieurs éléments sont manquants");
        return;
    }

    navLinks.forEach((link) => {
        link.addEventListener("click", function () {
            navLinks.forEach((link) => (link.style.color = "black")); // Réinitialiser la couleur de tous les liens à noir
            this.style.color = "#ffbb00"; // Mettre la couleur du lien cliqué à #ffbb00
        });
    });

    window.addEventListener("scroll", function () {
        const contactSectionTop = contactSection.offsetTop;
        const contactSectionHeight = contactSection.offsetHeight;
        const accueilSectionTop = accueilSection.offsetTop;
        const accueilSectionHeight = accueilSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        if (
            scrollPosition >= contactSectionTop &&
            scrollPosition < contactSectionTop + contactSectionHeight
        ) {
            navLinks.forEach((link) => (link.style.color = "black")); // Réinitialiser la couleur de tous les liens à noir
            contactLink.style.color = "#ffbb00"; // Mettre la couleur du lien contact à #ffbb00
        } else if (
            scrollPosition >= accueilSectionTop &&
            scrollPosition < accueilSectionTop + accueilSectionHeight
        ) {
            navLinks.forEach((link) => (link.style.color = "black")); // Réinitialiser la couleur de tous les liens à noir
            accueilLink.style.color = "#ffbb00"; // Mettre la couleur du lien accueil à #ffbb00
        } else {
            contactLink.style.color = "black"; // Réinitialiser la couleur du lien contact si il n'est pas visible
            accueilLink.style.color = "black"; // Réinitialiser la couleur du lien accueil si il n'est pas visible
        }
    });
});

const titreSpan = document.querySelectorAll("h1 span");
const smallSpan = document.querySelectorAll("small span");
const navbar = document.querySelectorAll("#navHeader");
const nav = document.querySelectorAll("#navTop a");
const menu = document.querySelectorAll("#navTop i");
const icon = document.querySelectorAll("#navSide .icon li ");
const iconContent = document.querySelectorAll(
    "#navSide .icon .icon-content a svg"
);
const button = document.querySelectorAll(".buttonR");

window.addEventListener("load", () => {
    const TL = gsap.timeline({
        paused: true,
    }); /* on met pause avant de creer notre timeline */

    TL.staggerFrom(
        smallSpan,
        1,
        { top: -50, opacity: 0, ease: "power2.out" },
        0.3
    )
        /*                 duration/ ce qu'on vas animer/ le easing/le stagger(temps entre chaque animation de notre span) */
        .staggerFrom(
            titreSpan,
            1,
            { top: -50, opacity: 0, ease: "power2.out" },
            0.3,
            "-=1"
        ) /* le '-=1' sert a faire apparaitre 1s avant que l'autre se termine pr éviter une apparition tour par tour mais qu'on tous qui apparait en mm temps */
        .staggerFrom(
            navbar,
            1.5,
            { transform: "scale(0)", opacity: 0, ease: "power2.in" },
            0.3,
            "-=3"
        )
        .staggerFrom(nav, 0.5, { opacity: 0, ease: "power2.in" }, 0.3, "-=1")
        .staggerFrom(menu, 1.1, { opacity: 0, ease: "power2.in" }, 0.3, "-=0.5")
        .staggerFrom(icon, 2, { left: 200, ease: "power2.out" }, 0.3, "-=3")
        .staggerFrom(
            iconContent,
            2,
            { opacity: 0, ease: "power2.out" },
            0.3,
            "-=2"
        )
        .staggerFrom(button, 0.4, { top: -50, ease: "power2.out" }, 0.3, "-=4");
    /* Quand il s'agit d'un seul élément ou lieu d'un groupe d'élements on fait .from au lieu de .staggerFrom  */

    TL.play();
});

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

document.getElementById("left-arrow").addEventListener("click", function () {
    document
        .getElementById("presta")
        .scrollBy({ left: -window.innerWidth, behavior: "smooth" });
});

document.getElementById("right-arrow").addEventListener("click", function () {
    document
        .getElementById("presta")
        .scrollBy({ left: window.innerWidth, behavior: "smooth" });
});

/*  ---------------------------------------TYPING EFFECT   ------------------------------------------------------*/

var typingEffect = new Typed(".typedText", {
    strings: ["Welcome to", "Bienvenue sur", "歡迎來到", "வரவேற்கிறோம்"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
});

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

/*__________________________________Abeille 3D________________________________________________________ */

import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const camera = new THREE.PerspectiveCamera(
    10, //distance de la caméra
    window.innerWidth / window.innerHeight, //pour rendre notre modèle 3d aussi grand que le cadre
    0.1, //on détermine la distance la plus proche de la caméra
    1000 //on détermine la distance la plus éloignée de la caméra
);

camera.position.z = 13; //on l'éloigne de l'axe Z pour pouvoir voir toute la scène

//on omporte le modèle 3D mtn
const scene = new THREE.Scene();
let bee; //ici on creer un objet bee
let mixer; //pour manage animation
const loader = new GLTFLoader();
loader.load(
    "img/bee.glb", //pour cette méthode de chargement on a trois fonctions callback

    function (gltf) {
        //la première fonction s'exécutera quand le chargement du modèle est terminé
        // dans la mesure où le téléchargement du fichier réussit on va prendre toutes les données sur le modèle et les mettre dans la scène (car au début la scène est vide)
        bee = gltf.scene;

        bee.scale.set(0.35, 0.35, 0.35); // Diminue la taille à 35% de l'original

        scene.add(bee);

        mixer = new THREE.AnimationMixer(bee);
        mixer.clipAction(gltf.animations[0]).play();
        modelMove();
    },

    function (xhr) {}, //la deuxième s'exécutera en continu pendant le processus de chargement pour aider l'utilisateur à vérifier la progression du chargement du fichier

    function (error) {} //et enfin la troisième fonction de rapport d'erreur cette fonction s'exécutera si une erreur se produit pendant le processus de chargement du modèle
);

//on va donc utilisé ces données pour dessiner sur l'écran
const renderer = new THREE.WebGLRenderer({ alpha: true }); // alpha sert a rendre le background de notre canva transparent
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("container3D").appendChild(renderer.domElement);

//éclairage (la lumière, sans ça notre modèle restera noir)
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3); //("couleur de la lumière", "intensité")
scene.add(ambientLight);
// direction de la lumière (position du soleil par exemple)
const topLight = new THREE.DirectionalLight(0xffffff, 1);
//on éclaire certaine partie et on laisse sombre d'autre pr que le modèle parraise plus réaliste
topLight.position.set(500, 500, 500);
scene.add(topLight);

//boucle d'animation pour actualiser le rendu à chaque image. Cela garantit que la scène se met à jour continuellement.
const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    renderer.render(scene, camera);
    if (mixer) mixer.update(0.02);
};
reRender3D();

let arrPositionModel = [
    {
        id: "landing-page",
        position: { x: 1.1, y: 0.05, z: -1 },
        rotation: { x: 1, y: -1, z: -0.5 },
    },
    {
        id: "accueil",
        position: { x: 1.15, y: 0.5, z: 0 },
        rotation: { x: 0.7, y: -0.5, z: 0 },
    },
    {
        id: "experiences",
        position: { x: -1.6, y: 0.4, z: -1 },
        rotation: { x: 0.5, y: 1, z: 0 },
    },
    {
        id: "contact",
        position: { x: -1.1, y: -0.25, z: 1 },
        rotation: { x: 0.3, y: 2.3, z: 0 },
    },
];

const modelMove = () => {
    const sections = document.querySelectorAll(".section");
    let currentSection;
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 3) {
            currentSection = section.id;
        }
    });
    let position_active = arrPositionModel.findIndex(
        //on utilise la fonction findIndex pour déterminer la position du modèle sur la page
        (val) => val.id == currentSection
    );
    if (position_active >= 0) {
        //dans la mesure ou la position trouvé est supérieur ou égale à 0 cela siginifie qu'elle a été retrouvé dans notre domaine (il s'agit aussi de notre tableau excel) à ce stade la nouvelle coordonée est égale à la position noté dans notre tableau
        let new_coordinates = arrPositionModel[position_active];
        gsap.to(bee.position, {
            x: new_coordinates.position.x,
            y: new_coordinates.position.y,
            z: new_coordinates.position.z,
            duration: 3,
            ease: "power1.out",
        });

        gsap.to(bee.rotation, {
            x: new_coordinates.rotation.x,
            y: new_coordinates.rotation.y,
            z: new_coordinates.rotation.z,
            duration: 3,
            ease: "power1.out",
        });
    }
};
window.addEventListener("scroll", () => {
    if (bee) {
        modelMove();
    }
});

//pour le coté responsive vis à vis de l'abeille
window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

/*  ---------------------------------------scroll effect   ------------------------------------------------------*/


const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

/*  ----------------Accueil-----------------------*/
sr.reveal(".text-intro", {});
sr.reveal(".styled-wrapper-pre", { delay: 100 });
sr.reveal(".styled-wrapper-nxt", { delay: 100 });
sr.reveal(".prestation", { delay: 100 });
/*  ----------------EXPERIENCES-----------------------*/
sr.reveal("#experiences h3", { delay: 200 });
sr.reveal(".photo-client", { delay: 200 });
sr.reveal(".avis", { delay: 200 });
/*  ----------------contact----------------------*/
const srLeft = ScrollReveal({
    origin: "left",
    distance: "600px",
    duration: 2000,
    reset: true,
});
srLeft.reveal(".container", { delay: 300 });
srLeft.reveal(".title", { delay: 300 });
srLeft.reveal("section#contact form", { delay: 300 });

const srRight = ScrollReveal({
    origin: "right",
    distance: "600px",
    duration: 2000,
    reset: true,
});
srRight.reveal(".cookie-card", { delay: 100 });


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
