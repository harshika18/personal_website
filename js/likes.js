$(document).ready(function () {
    $("#likeB").click(function () {
    });
});
if (typeof (Storage) !== "undefined") {
    if ("likes" in localStorage){
        document.getElementById("CounterH").innerHTML = localStorage.getItem("likes");
    }
    else{
        localStorage.setItem("likes", "0");
    }
}
function increaseLike() {
    if (typeof (Storage) !== "undefined") {
        var tlikes = localStorage.getItem("likes");
        tlikes++;
        localStorage.setItem("likes", tlikes);
        document.getElementById("CounterH").innerHTML = tlikes;
    }
}