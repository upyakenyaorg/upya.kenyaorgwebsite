/* =========================================================
   ELIMUPLUS - SHARED WEBSITE SYSTEM
   Header + Footer + Social Media + WhatsApp
   ========================================================= */


/* =========================================================
   BASIC ACTIONS
   ========================================================= */

function join() {
    window.location.href = "register.html";
}


function choosePlan() {
    window.location.href = "pricing.html";
}


function searchSite(e) {

    e.preventDefault();

    const input = e.target.querySelector("input");

    if (!input) return;

    const query = input.value.trim();

    if (!query) {
        alert("Enter a course, subject, teacher or book to search.");
        return;
    }

    /*
        Temporary search behaviour.

        Later this will connect to the ElimuPlus
        database and search:

        - Courses
        - Subjects
        - Lessons
        - Teachers
        - Books
        - Questions
        - Short courses
    */

    const searchURL =
        `search.html?q=${encodeURIComponent(query)}`;

    window.location.href = searchURL;
}


/* =========================================================
   ELIMUPLUS CONFIGURATION
   ========================================================= */

const ELIMUPLUS_CONFIG = {

    /*
        IMPORTANT:
        Replace this with the official ElimuPlus
        WhatsApp number in international format.

        Example:
        2547XXXXXXXX

        Do NOT include:
        +
        spaces
        brackets
        hyphens
    */

    whatsappNumber: "YOUR_WHATSAPP_NUMBER",

    whatsappMessage:
        "Hello ElimuPlus, I would like to know more about your learning platform.",

    logo: "logo.svg",

    brandName: "ElimuPlus",

    tagline:
        "Education, skills and personal development in one connected learning space."

};


/* =========================================================
   LOAD FONT AWESOME
   ========================================================= */

(function loadFontAwesome() {

    const existing =
        document.querySelector(
            'link[href*="font-awesome"]'
        );

    if (existing) return;

    const link =
        document.createElement("link");

    link.rel = "stylesheet";

    link.href =
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css";

    link.crossOrigin = "anonymous";

    document.head.appendChild(link);

})();


/* =========================================================
   PAGE LIST
   ========================================================= */

(function () {

    const pages = [

        "index.html",

        "about.html",

        "courses.html",

        "practice.html",

        "teachers.html",

        "news.html",

        "contact.html",

        "pricing.html",

        "ai-assistant.html",

        "student-dashboard.html",

        "register.html",

        "login.html",

        "books.html",

        "short-courses.html",

        "examinations.html",

        "education.html",

        "subjects.html"

    ];


    const current =
        location.pathname.split("/").pop()
        || "index.html";


    /*
        If this isn't one of the ElimuPlus pages,
        stop here.
    */

    if (!pages.includes(current)) return;


    /* =====================================================
       SHARED NAVIGATION
       ===================================================== */

    const nav =
        document.querySelector("nav.nav");


    if (nav) {

        const logo = `

            <img
                src="${ELIMUPLUS_CONFIG.logo}"
                alt="ElimuPlus"
                class="shared-logo"
            >

        `;


        const items = [

            ["about.html", "About"],

            ["courses.html", "Courses"],

            ["practice.html", "Practice"],

            ["teachers.html", "Teachers"],

            ["ai-assistant.html", "ElimuPlus AI"],

            ["news.html", "News"],

            ["contact.html", "Contact"]

        ];


        const links = items
            .map(([url, label]) => {

                const isActive =
                    current === url
                    ? "active"
                    : "";

                return `

                    <a
                        href="${url}"
                        class="${isActive}"
                    >
                        ${label}
                    </a>

                `;

            })
            .join("");


        nav.innerHTML = `

            <div class="wrap">

                <a
                    class="brand"
                    href="index.html"
                    aria-label="ElimuPlus Home"
                >

                    ${logo}

                </a>


                <button
                    class="mobile-menu-toggle"
                    type="button"
                    aria-label="Open navigation menu"
                    aria-expanded="false"
                >

                    <i class="fa-solid fa-bars"></i>

                </button>


                <div class="links">

                    ${links}


                    <a
                        href="student-dashboard.html"
                        class="signin-link"
                    >

                        <i class="fa-regular fa-user"></i>

                        Sign in

                    </a>


                    <a
                        href="register.html"
                        class="btn primary"
                    >

                        Get started

                    </a>

                </div>

            </div>

        `;

    }


    /* =====================================================
       SHARED FOOTER
       ===================================================== */

    const footer =
        document.querySelector("footer");


    if (footer) {

        footer.innerHTML = `

            <div class="wrap">

                <div class="footer-grid">


                    <!-- BRAND -->

                    <div class="footer-brand">

                        <a
                            class="brand"
                            href="index.html"
                            aria-label="ElimuPlus Home"
                        >

                            <img
                                src="${ELIMUPLUS_CONFIG.logo}"
                                alt="ElimuPlus"
                                class="footer-logo"
                            >

                        </a>


                        <p>

                            ${ELIMUPLUS_CONFIG.tagline}

                        </p>


                        <!-- SOCIAL MEDIA -->

                        <div class="social-links">


                            <a
                                href="https://www.tiktok.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ElimuPlus on TikTok"
                                title="TikTok"
                            >

                                <i class="fa-brands fa-tiktok"></i>

                            </a>


                            <a
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ElimuPlus on Facebook"
                                title="Facebook"
                            >

                                <i class="fa-brands fa-facebook-f"></i>

                            </a>


                            <a
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ElimuPlus on Instagram"
                                title="Instagram"
                            >

                                <i class="fa-brands fa-instagram"></i>

                            </a>


                            <a
                                href="https://www.youtube.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ElimuPlus on YouTube"
                                title="YouTube"
                            >

                                <i class="fa-brands fa-youtube"></i>

                            </a>


                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ElimuPlus on LinkedIn"
                                title="LinkedIn"
                            >

                                <i class="fa-brands fa-linkedin-in"></i>

                            </a>


                            <a
                                href="https://x.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="ElimuPlus on X"
                                title="X"
                            >

                                <i class="fa-brands fa-x-twitter"></i>

                            </a>

                        </div>

                    </div>


                    <!-- LEARN -->

                    <div>

                        <h4>LEARN</h4>


                        <a href="courses.html">
                            Courses
                        </a>


                        <a href="practice.html">
                            Practice
                        </a>


                        <a href="examinations.html">
                            Examinations
                        </a>


                        <a href="ai-assistant.html">
                            ElimuPlus AI
                        </a>

                    </div>


                    <!-- CONNECT -->

                    <div>

                        <h4>CONNECT</h4>


                        <a href="teachers.html">
                            Find a Teacher
                        </a>


                        <a href="contact.html">
                            Contact Us
                        </a>


                        <a href="news.html">
                            News & Study Tips
                        </a>


                        <a href="short-courses.html">
                            Short Courses
                        </a>

                    </div>


                    <!-- ELIMUPLUS -->

                    <div>

                        <h4>ELIMUPLUS</h4>


                        <a href="about.html">
                            About Us
                        </a>


                        <a href="pricing.html">
                            Membership
                        </a>


                        <a href="about.html#partner">
                            Partner With Us
                        </a>


                        <a href="register.html">
                            Join ElimuPlus
                        </a>

                    </div>


                </div>


                <!-- FOOTER BOTTOM -->

                <div class="footer-bottom">


                    <div class="copyright">

                        © 2026 ElimuPlus.
                        All rights reserved.

                    </div>


                    <div class="footer-bottom-links">

                        <a href="#">
                            Privacy Policy
                        </a>


                        <a href="#">
                            Terms of Use
                        </a>


                        <a href="contact.html">
                            Support
                        </a>

                    </div>

                </div>

            </div>

        `;

    }


    /* =====================================================
       MOBILE NAVIGATION
       ===================================================== */

    const menuButton =
        document.querySelector(
            ".mobile-menu-toggle"
        );


    const linksContainer =
        document.querySelector(
            ".nav .links"
        );


    if (menuButton && linksContainer) {

        menuButton.addEventListener(
            "click",
            function () {

                const isOpen =
                    linksContainer.classList.toggle(
                        "mobile-open"
                    );


                menuButton.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );


                menuButton.innerHTML = isOpen

                    ? '<i class="fa-solid fa-xmark"></i>'

                    : '<i class="fa-solid fa-bars"></i>';

            }
        );

    }


    /* =====================================================
       FLOATING WHATSAPP BUTTON
       ===================================================== */

    createWhatsAppButton();


})();


/* =========================================================
   WHATSAPP BUTTON
   ========================================================= */

function createWhatsAppButton() {

    /*
        Don't create duplicate buttons.
    */

    if (
        document.querySelector(
            ".elimuplus-whatsapp"
        )
    ) {
        return;
    }


    const button =
        document.createElement("a");


    /*
        If the number has not been configured,
        still create the button but point to WhatsApp.
    */

    let whatsappURL =
        "https://wa.me/";


    if (
        ELIMUPLUS_CONFIG.whatsappNumber
        &&
        ELIMUPLUS_CONFIG.whatsappNumber
        !== "YOUR_WHATSAPP_NUMBER"
    ) {

        whatsappURL +=
            ELIMUPLUS_CONFIG.whatsappNumber
            +
            "?text="
            +
            encodeURIComponent(
                ELIMUPLUS_CONFIG.whatsappMessage
            );

    } else {

        /*
            Temporary fallback.
            Replace the number above before launch.
        */

        whatsappURL =
            "https://wa.me/";

    }


    button.href = whatsappURL;

    button.target = "_blank";

    button.rel =
        "noopener noreferrer";


    button.className =
        "elimuplus-whatsapp";


    button.setAttribute(
        "aria-label",
        "Chat with ElimuPlus on WhatsApp"
    );


    button.setAttribute(
        "title",
        "Chat with ElimuPlus"
    );


    button.innerHTML = `

        <i class="fa-brands fa-whatsapp"></i>

        <span class="whatsapp-tooltip">
            Chat with ElimuPlus
        </span>

    `;


    document.body.appendChild(button);

}


/* =========================================================
   SEARCH FORM SUPPORT
   ========================================================= */

document.addEventListener(
    "submit",
    function (event) {

        const form =
            event.target;


        if (
            form.matches(
                ".site-search"
            )
        ) {

            searchSite(event);

        }

    }
);


/* =========================================================
   CURRENT YEAR
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const yearElements =
            document.querySelectorAll(
                ".current-year"
            );


        yearElements.forEach(
            element => {

                element.textContent =
                    new Date().getFullYear();

            }
        );

    }
);
