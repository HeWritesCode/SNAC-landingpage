document.getElementById("toggleDrawer").addEventListener("click", function () {
    var drawer = document.getElementById("drawer");
    if (drawer.style.left === "0px") {
        drawer.style.left = "-250px";
    } else {
        drawer.style.left = "0px";
    }
});
