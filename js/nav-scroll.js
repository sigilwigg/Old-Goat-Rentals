window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (
        document.body.scrollTop > 650
        || document.documentElement.scrollTop > 650
    ) {
        document.getElementById("navbar").style.background = "rgba(0,0,0,.75)";
    } else {
        document.getElementById("navbar").style.background = "rgba(0,0,0,0)";
    }
}