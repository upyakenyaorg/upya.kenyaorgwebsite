```javascript
/* =========================================================
   ELIMUPLUS MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const mobileMenuBtn =
        document.getElementById("mobileMenuBtn");

    const mobileNav =
        document.getElementById("mobileNav");


    if (mobileMenuBtn && mobileNav) {

        mobileMenuBtn.addEventListener("click", () => {

            const isOpen =
                mobileNav.classList.toggle("active");

            mobileMenuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );


            const icon =
                mobileMenuBtn.querySelector("i");


            if (icon) {

                icon.classList.toggle(
                    "fa-bars",
                    !isOpen
                );

                icon.classList.toggle(
                    "fa-xmark",
                    isOpen
                );

            }

        });


        /* Close menu after clicking a link */

        const mobileLinks =
            mobileNav.querySelectorAll("a");


        mobileLinks.forEach(link => {

            link.addEventListener("click", () => {

                mobileNav.classList.remove("active");

                mobileMenuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );


                const icon =
                    mobileMenuBtn.querySelector("i");


                if (icon) {

                    icon.classList.remove(
                        "fa-xmark"
                    );

                    icon.classList.add(
                        "fa-bars"
                    );

                }

            });

        });

    }



    /* =====================================================
       AI SEARCH
    ===================================================== */

    const aiSearchForm =
        document.getElementById("aiSearchForm");

    const aiSearchInput =
        document.getElementById("aiSearchInput");


    if (aiSearchForm && aiSearchInput) {

        aiSearchForm.addEventListener(
            "submit",
            (event) => {

                event.preventDefault();


                const question =
                    aiSearchInput.value.trim();


                if (!question) {

                    aiSearchInput.focus();

                    return;

                }


                /*
                 * AI BACKEND WILL BE CONNECTED LATER.
                 *
                 * For now, take the student to
                 * the ElimuPlus AI page with the
                 * question in the URL.
                 */

                const encodedQuestion =
                    encodeURIComponent(question);


                window.location.href =
                    `pages/ai.html?q=${encodedQuestion}`;

            }
        );

    }



    /* =====================================================
       SEARCH SUGGESTIONS
    ===================================================== */

    const suggestions =
        document.querySelectorAll(
            ".search-suggestions button"
        );


    suggestions.forEach(button => {

        button.addEventListener("click", () => {

            if (!aiSearchInput) return;


            aiSearchInput.value =
                button.textContent.trim();


            aiSearchInput.focus();

        });

    });



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const currentYear =
        document.getElementById("currentYear");


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }

});
```
