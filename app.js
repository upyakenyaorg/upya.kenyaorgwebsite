function join() {
    window.location.href = "register.html";
}

function choosePlan() {
    window.location.href = "pricing.html";
}

function searchSite(e) {
    e.preventDefault();

    const query = e.target.querySelector("input").value.trim();

    if (!query) {
        alert("Enter a course, subject, teacher or book to search.");
        return;
    }

    // Temporary search behaviour.
    // Later this will search the Supabase database.
    window.location.href =
        `courses.html?search=${encodeURIComponent(query)}`;
}


/* ==========================================
   ELIMUPLUS SHARED HEADER + FOOTER
   ========================================== */

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
        "books.html",
        "short-courses.html",
        "examinations.html",
        "register.html",
        "login.html",
        "student-dashboard.html",
        "teacher-dashboard.html"
    ];

    const current =
        location.pathname.split("/").pop() || "index.html";

    if (!pages.includes(current)) return;


    /* ==========================================
       HEADER
       ========================================== */

    const nav = document.querySelector("nav.nav");

    const logo = `
        <img
            src="logo.svg"
            alt="ElimuPlus"
            class="site-logo"
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


    const links = items.map(([url, label]) => {

        return `
            <a
                href="${url}"
                class="${current === url ? "active" : ""}"
            >
                ${label}
            </a>
        `;

    }).join("");


    if (nav) {

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
                    class="mobile-menu"
                    id="mobileMenu"
                    aria-label="Open navigation"
                    aria-expanded="false"
                >
                    <i class="fa-solid fa-bars"></i>
                </button>


                <div class="links" id="mainLinks">

                    ${links}

                    <a
                        href="student-dashboard.html"
                        class="${current === "student-dashboard.html" ? "active" : ""}"
                    >
                        Sign in
                    </a>

                    <button
                        class="btn primary"
                        onclick="join()"
                    >
                        Get started
                    </button>

                </div>

            </div>
        `;
    }


    /* ==========================================
       MOBILE MENU
       ========================================== */

    const mobileMenu =
        document.getElementById("mobileMenu");

    const mainLinks =
        document.getElementById("mainLinks");


    if (mobileMenu && mainLinks) {

        mobileMenu.addEventListener("click", () => {

            const isOpen =
                mainLinks.classList.toggle("open");

            mobileMenu.setAttribute(
                "aria-expanded",
                isOpen
            );

            mobileMenu.innerHTML = isOpen
                ? `<i class="fa-solid fa-xmark"></i>`
                : `<i class="fa-solid fa-bars"></i>`;
        });

    }


    /* ==========================================
       FOOTER
       ========================================== */

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
                        >

                            <img
                                src="logo.svg"
                                alt="ElimuPlus"
                                class="site-logo footer-logo"
                            >

                        </a>


                        <p>
                            Education, skills and personal
                            development in one connected
                            learning space.
                        </p>


                        <!-- SOCIAL MEDIA -->

                        <div
                            class="social-links"
                            aria-label="ElimuPlus social media"
                        >

                            <a
                                href="#"
                                aria-label="Facebook"
                                title="Facebook"
                            >
                                <i class="fa-brands fa-facebook-f"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="Instagram"
                                title="Instagram"
                            >
                                <i class="fa-brands fa-instagram"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="TikTok"
                                title="TikTok"
                            >
                                <i class="fa-brands fa-tiktok"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="YouTube"
                                title="YouTube"
                            >
                                <i class="fa-brands fa-youtube"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="LinkedIn"
                                title="LinkedIn"
                            >
                                <i class="fa-brands fa-linkedin-in"></i>
                            </a>


                            <a
                                href="#"
                                aria-label="X"
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

                        <a href="books.html">
                            Books
                        </a>

                        <a href="about.html#partner">
                            Partner With Us
                        </a>

                    </div>

                </div>


                <div class="copyright">

                    <p>
                        © 2026 ElimuPlus.
                        Learning for every next step.
                    </p>

                    <div class="footer-legal">

                        <a href="#">
                            Privacy Policy
                        </a>

                        <a href="#">
                            Terms
                        </a>

                    </div>

                </div>

            </div>
        `;
    }


    /* ==========================================
       FLOATING WHATSAPP BUTTON
       ========================================== */

    const whatsappNumber =
        "254742713736";

    const whatsappMessage =
        "Hello ElimuPlus, I would like to know more about your learning platform.";


    const whatsapp =
        document.createElement("a");


    whatsapp.href =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    whatsapp.target = "_blank";

    whatsapp.rel = "noopener noreferrer";

    whatsapp.className =
        "whatsapp-float";

    whatsapp.setAttribute(
        "aria-label",
        "Chat with ElimuPlus on WhatsApp"
    );

    whatsapp.innerHTML = `
        <i class="fa-brands fa-whatsapp"></i>
        <span>Chat with us</span>
    `;


    document.body.appendChild(whatsapp);

})();
