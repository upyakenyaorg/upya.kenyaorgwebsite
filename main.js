document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       MOBILE MENU
       ========================================= */

    const menuButton =
        document.getElementById("mobileMenuBtn");

    const mobileNav =
        document.getElementById("mobileNav");


    if (menuButton && mobileNav) {

        menuButton.addEventListener("click", function () {

            mobileNav.classList.toggle("active");

            const icon =
                menuButton.querySelector("i");


            if (
                mobileNav.classList.contains("active")
            ) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "true"
                );

                icon.classList.remove(
                    "fa-bars"
                );

                icon.classList.add(
                    "fa-xmark"
                );

            } else {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                icon.classList.remove(
                    "fa-xmark"
                );

                icon.classList.add(
                    "fa-bars"
                );

            }

        });

    }


    /* =========================================
       SEARCH
       ========================================= */

    const searchForm =
        document.getElementById("aiSearchForm");

    const searchInput =
        document.getElementById("aiSearchInput");


    if (searchForm && searchInput) {

        searchForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                const question =
                    searchInput.value.trim();


                if (question === "") {

                    searchInput.focus();

                    return;

                }


                alert(
                    "ElimuPlus AI will answer: " +
                    question
                );

            }
        );

    }


    /* =========================================
       SEARCH SUGGESTIONS
       ========================================= */

    const suggestionButtons =
        document.querySelectorAll(
            ".search-suggestions button"
        );


    suggestionButtons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    searchInput.value =
                        button.textContent.trim();

                    searchInput.focus();

                }
            );

        }
    );


    /* =========================================
       CURRENT YEAR
       ========================================= */

    const year =
        document.getElementById("currentYear");


    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
