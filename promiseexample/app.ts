let display = (function() {
    let displayElement: HTMLElement;
    displayElement = document.getElementById("displayText") as HTMLElement;
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
let btnClick = (function() {
    let prom = new Promise(function(resolve, reject) {
        window.setTimeout(function() {
            resolve();
        }, 2000)
    });

    prom.then(function() {
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
