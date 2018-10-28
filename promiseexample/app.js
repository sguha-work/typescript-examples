var display = (function () {
    var displayElement;
    displayElement = document.getElementById("displayText");
    displayElement.style.display = "block";
});
var btnClick = (function () {
    window.setTimeout(function () {
        display();
    }, 2000);
});
