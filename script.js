
/* =========================================
   NØTA BOUTIQUE - SCRIPT.JS
========================================= */


/* =========================
LOADING SCREEN
========================= */

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.pointerEvents = "none";

            setTimeout(() => {
                loader.style.display = "none";
            }, 800);

        }, 1200);
    }
});


/* =========================
WHATSAPP FUNCTIONS
========================= */

function contact() {
    window.open(
        "https://wa.me/254794591794?text=Hi%20N%C3%98TA%20I%20want%20a%20custom%20order",
        "_blank"
    );
}

function order(productName = "Product") {
    window.open(
        `https://wa.me/254794591794?text=Hi%20N%C3%98TA%20I%20want%20to%20order%20the%20${encodeURIComponent(productName)}`,
        "_blank"
    );
}


/* =========================
SCROLL ANIMATION (REVEAL)
========================= */

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".hidden").forEach(el => {
    observer.observe(el);
});


/* =========================
NAV ACTIVE HIGHLIGHT (OPTIONAL POLISH)
========================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    const targetPath = new URL(link.href, window.location.href).pathname;

    if (targetPath === window.location.pathname) {
        link.classList.add("active");
    }
});


/* =========================
SMOOTH BUTTON FEEL (micro interaction)
========================= */

document.querySelectorAll(".btn, .outline").forEach(btn => {
    btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.96)";
    });

    btn.addEventListener("mouseup", () => {
        btn.style.transform = "scale(1)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});


/* =========================
EXTRA POLISH: PARALLAX FEEL (LIGHT)
========================= */

window.addEventListener("scroll", () => {
    const heroImg = document.querySelector(".hero-image img");

    if (heroImg) {
        let offset = window.scrollY * 0.02;
        heroImg.style.transform = `translateY(${offset}px)`;
    }
});
