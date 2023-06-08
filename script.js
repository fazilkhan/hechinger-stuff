if (window.matchMedia("(max-width: 500px)").matches) {
    document.getElementById("step0").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/black-starting-map-01.png)"
    document.getElementById("step1").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/black-map-highlighted-01.png)"
    document.getElementById("step2").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/black-chart-1-mobile-01.png)"
    document.getElementById("step3").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/black-chart-mobile-2-01.png)"
    document.getElementById("step4").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/black-chart-mobile-3-01.png)"
    document.getElementById("step5").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/black-chart-mobile-3-01.png)"
    document.getElementById("step6").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/latino-starting-map-01.png)"
    document.getElementById("step7").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/latino-map-highlighted-01.png)"
    document.getElementById("step8").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/latino-chart-mobile-1-01.png)"
    document.getElementById("step9").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/latino-chart-mobile-2-01.png)"
    document.getElementById("step10").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/latino-chart-mobile-3-01.png)"
    document.getElementById("step11").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/latino-chart-mobile-3-01.png)"
    document.getElementById("step12").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/grad-rates-blank-map-01.png)"
    document.getElementById("step13").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/median-income-map-01.png)"
    document.getElementById("step14").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/grad-rates-map-01.png)"
    document.getElementById("step15").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/grad-rate-chart-mobile-01.png)"
    document.getElementById("step16").dataset.img = "url(https://hechingerreport.org/wp-content/uploads/2023/05/grad-rate-chart-mobile-01.png)"
  /* the viewport is less than or exactly 500 pixels wide */
} else {
    console.log("desktop")
   /*  
  /* the viewport is more than 500 pixels wide */
}
// DOM - document object model (section 1)
var mainScrolly = document.querySelector("#mainScrolly");
var scrolly1 = mainScrolly.querySelector("#scrolly1");
var sticky1 = scrolly1.querySelector(".sticky-thing1");
var article1 = scrolly1.querySelector("article1");

var scrolly2 = mainScrolly.querySelector("#scrolly2");
var sticky2 = scrolly2.querySelector(".sticky-thing2");
var article2 = scrolly2.querySelector("article2");

var scrolly3 = mainScrolly.querySelector("#scrolly3");
var sticky3 = scrolly3.querySelector(".sticky-thing3");
var article3 = scrolly3.querySelector("article3");

// initialize the scrollama
var scroller1 = scrollama();
var scroller2 = scrollama();
var scroller3 = scrollama();

// scrollama event handlers
function handleStepEnte1(response) {
// response = { element, direction, index }
var el = response.element;
sticky1.style.backgroundImage = el.dataset.img;
}

function handleStepEnter2(response) {
// response = { element, direction, index }
var el = response.element;
sticky2.style.backgroundImage = el.dataset.img;
}

function handleStepEnter3(response) {
// response = { element, direction, index }
var el = response.element;
sticky3.style.backgroundImage = el.dataset.img;
}

function init() {
scroller1
.setup({
step: "#scrolly1 article1 .step",
offset: 0.99,
debug: false
})
.onStepEnter(handleStepEnte1);

scroller2
.setup({
step: "#scrolly2 article2 .step",
offset: 0.99,
debug: false
})
.onStepEnter(handleStepEnter2);

scroller3
.setup({
step: "#scrolly3 article3 .step",
offset: 0.99,
debug: false
})
.onStepEnter(handleStepEnter3);

// setup resize event
window.addEventListener("resize", scroller1.resize);
window.addEventListener("resize", scroller2.resize);
window.addEventListener("resize", scroller3.resize);
}
// kick things off
init();