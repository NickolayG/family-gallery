const mq = window.matchMedia("(max-width: 800px)");

if (mq.matches) {
    const mobileNavIcon = document.getElementById("mobileNavMenuButton");
    const mobileDropdownMenu = document.getElementById("mobileDropMenu");
    console.log('0');
    

    mobileNavIcon.addEventListener("click", function() {
        if (mobileDropdownMenu.style.display != "block") {
            console.log('1');
            

            mobileDropdownMenu.style.display = "block";

        } else if (mobileDropdownMenu.style.display = "block") {
            console.log('2');
            

            mobileDropdownMenu.style.display = "none";
            
        }
    })
}