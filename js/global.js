const mq = window.matchMedia("(max-width: 600px)");

if (mq.matches) {
    const mobileNavIcon = document.getElementById("mobileNavMenuButton");
    const mobileDropdownMenu = document.getElementById("mobileDropMenu");

    mobileNavIcon.addEventListener("click", function() {
        if (mobileDropdownMenu.style.display != "block") {

            mobileDropdownMenu.style.display = "block";

        } else if (mobileDropdownMenu.style.display = "block") {

            mobileDropdownMenu.style.display = "none";
            
        }
    })
}