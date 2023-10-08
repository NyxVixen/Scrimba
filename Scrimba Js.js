/*ADDING AN EVENT LISTENER

// 1. Grab the box from the DOM and store it in a variable
let boxEl = document.getElementById("box")
// 2. Add a click event listener to the box
box.addEventListener("click", function() {
    console.log("I want to open the box!")
}) 
// 3. Log out "I want to open the box!" when it's clicked*/



//PUSHING VALUE FROM INPUT TO AN ARRAY

/*let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el").value

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl)
    console.log(myLeads)
})*/


//CREATING HTML ELEMENTS IN JS
// Let's try a different method!

/*for (let i = 0; i < myLeads.length; i++) { ----------------- These first two lines alone
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>" ------- are easier to understand
    // create element
    // set text content
    // append to ul
    const li = document.createElement("li") ......... Instead of using these
    li.textContent = myLeads[i] ..................... three lines within
    ulEl.append(li) ................................. the for loop
}*/

//TURNING A STRING TO ARRAY THEN BACK TO STRING USING JSON

/*// 1. Turn the myLeads string into an array
        myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
        myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
        myLeads = JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
        console.log(typeof myLeads)*/

 
//SAVE ARRAY TO LOCAL STORAGE

/*inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    renderLeads()
    
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})*/


//ARRAYS AS PARAMETERS

/*function getFirst(arr) {
    return arr[0]
}

let firstCard = getFirst([10, 2, 5])

console.log(firstCard)*/



//RENDER AN ARRAY FROM CLICK LISTENER 

/*const tabBtn = document.getElementById("tab-btn")

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
    console.log(tabs[0].url)
})*/



//PUSHING LEAD FROM TABS BUTTON

/*tabBtn.addEventListener("click", function(){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})*/



//PULLING ITEMS FROM LOCAL STORAGE

/*localStorage.setItem("myItems", "Get this item")
-- Console.log/Store item and then remove code and run code below to verify --
let myItems = localStorage.getItem("myItems")
console.log(myItems)*/






