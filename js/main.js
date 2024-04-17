
/****************************/
/* Find elements in the DOM */
/* **************************/


// by id
const mainTitle = document.getElementById("main-title");
mainTitle.innerHTML = "Welcome to The Script Society";



// by class name
const infoCollection = document.getElementsByClassName("info");

const infoElementsArray = [...infoCollection]; // convert html collection to an array

infoElementsArray.forEach(function(elm){
    elm.innerHTML = "THIS IS THE NEW TEXT";
    elm.style.background = "#ff9999";
});


// by tag name
const allParagraphsHtmlCollection = document.getElementsByTagName("p");


// by css selectors....
const first = document.querySelector("header h2");
const all = document.querySelectorAll("header h2");

all.forEach( function(elm){
    elm.style.color = "orange";
});


//
// context: document vs. element
//

const productsElm = document.getElementById("products");
const allParagraphsInProductsElm = productsElm.getElementsByTagName("p");

const allParagraphsInProductsElm_Alternative  = document.querySelectorAll("#products p");



/**************/
/* Properties */
/**************/


//Read/Modify html contents --> elm.innerHTML

const pikachuElm = document.getElementById("pikachu");
pikachuElm.innerHTML = `
    <div>
        <p>One</p>
        <p>
            Two
            <a href="#">click here for more info</a>
        </p>
    </div>
`

//Read/Modify text content --> elm.innerText
const linkElm = document.getElementById("my-link");
linkElm.innerText = "About The Script Society";



//Read/Modify CSS --> elm.style

mainTitle.style.color = "blue";
mainTitle.style.backgroundColor = "yellow";
mainTitle.style.borderBottom = "5px solid orange";


//Read/Modify the id --> elm.id
mainTitle.id = "this-is-the-new-id";


//Read/Modify class --> elm.className
mainTitle.className = "title rounded"

//(bonus) elm.classList (provides methods to access class names)
mainTitle.classList.add("new-class");
mainTitle.classList.remove("rounded");
mainTitle.classList.toggle("active");



/**************/
/* Attributes */
/**************/


// get: elm.getAttribute(attributeName);

const myLink = document.getElementById("my-link");
const result = myLink.getAttribute("href");


// modify or create: elm.setAttribute(name, value);
myLink.setAttribute("target", "_blank");


// remove: elm.removeAttribute(attrName);




/*********************/
/* Create a DOM node */
/*********************/

// step1: create the element
const newImg = document.createElement("img");

// step2: add content or modify (ex. innerHTML, innerText, setAttribute...)
newImg.setAttribute("src", "./images/pikachu.jpg");
newImg.setAttribute("alt", "beautiful pikachu image");


//step3: append to the dom: `parentElm.appendChild()`
const parentElm = document.getElementById("pikachu");
parentElm.appendChild(newImg);




/**************/
/**************/
/*   Events   */
/**************/
/**************/

/*

Examples of events
  - mouse events (ex. click, mouseover...)
  - keyboard events (ex. keydown, keypress, keyup)
  - Document (DOMContentLoaded, ...)
  - Full list: https://www.w3schools.com/jsref/dom_obj_event.asp

*/

// elm.addEventListener(typeOfEvent, codeToExecute)


//
// Detect click event
//
const btn = document.getElementById("button-1");
btn.addEventListener("click", () => {

    // step1:
    const newP = document.createElement("p");

    // step2: 
    newP.innerText = "Lorem ipsum"

    // step3:
    const containerElm = document.getElementById("my-container");
    containerElm.appendChild(newP);
})


// 
// Detect key event
// 

document.addEventListener("keydown", (e) => {
    if(e.code === "Space"){
        console.log("user pressed Spacebar");
    } else if (e.code === "ArrowUp"){
        console.log("user pressed arrow UP");
    } else {
        console.log("user pressed something else...");
    }
});


//
// Attach event to multiple elements
// 

const allBtn = document.querySelectorAll(".btn");

allBtn.forEach( (btnElm) => {
    btnElm.addEventListener("click", () => {
        console.log("**** click on a generic button ****")
    });
});


