let display = (function() {
    let displayElement: HTMLElement;
    displayElement = document.getElementById("displayText") as HTMLElement;
    displayElement.style.display = "block";
});

let btnClick = (function() {
    window.setTimeout(function() {
        display();
    }, 2000)
});