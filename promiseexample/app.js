var display = (function () {
    var displayElement;
    displayElement = document.getElementById("displayText");
    displayElement.style.display = "block";
});
/**
 * This is use of callback
 */
// let btnClick = (function() {
//     window.setTimeout(function() {
//         display();
//     }, 2000)
// });
/**
 * Use of promise
 */
var btnClick = (function () {
    var prom = new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            resolve();
        }, 2000);
    });
    prom.then(function () {
        display();
    });
});
// let btnClick = (() => {
//     let prom = new Promise((resolve, reject) => {
//         window.setTimeout(() => {
//             resolve();
//         }, 2000)
//     });
//     prom.then(() => {
//         display();
//     });
// });
