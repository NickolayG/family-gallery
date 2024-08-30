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

const accountBtn1 = document.getElementById("btn1");
const accountBtn2 = document.getElementById("btn2");
const accountBtn3 = document.getElementById("btn3");

accountBtn2.addEventListener("click", function() {
    //
})