import { propertyForSaleArr } from 'Scrimba\Super Challenge\coae34e829964f8a5210b5730\properties\propertyForSaleArr'
import { placeholderPropertyObj } from 'Scrimba\Super Challenge\coae34e829964f8a5210b5730\properties\placeholderPropertyObj'

console.log(propertyForSaleArr)

const { propertyLocation, priceGBP, roomsM2, comment, image } = propertyForSaleArr

function getPropertyHtml(defaultProperty = placeholderPropertyObj) {
    const propertySize = propertyForSaleArr.reduce(function (total, currentPropertySize) {
        total + currentPropertySize.roomsM2
        return currentPropertySize
    }, 0)

    /*
    SUPER CHALLENGE 💪
    
    Render out a card for each of the properties in the propertyForSaleArr array (in the 'properties' folder). Each card should have an image, a property location, a price, a comment and the TOTAL property size in square metres (each object has an array with the size in square metres of the individual rooms).
    
    If no array of properties is passed to getPropertyHtml, the placeholder property stored in placeholderPropertyObj (in the 'properties' folder) should be rendered instead.
    
    This is the JS I want you to use to complete this challenge 👇
    - import/export **** import/export the arrays/objects to this file
    - .map() **** use to iterate over the array/objects
    - .join() **** remove any commas or adjust the division of the items in the array as preferred
    - Object destructuring **** creating a new variable and adding each object within curly brackets to that to destructure the objects
    - .reduce() **** count down from the first number value down adding each value as it iterates down to the last one for a final total of all values 
    - Default parameters **** making a parameter equal something automatically in case it has not been manually defined
    
    *** REDUCE, JOIN, and MAP ARE ALL METHODS AND REQUIRE A FUNCTION (INLINE OR ARROW). REDUCE REQUIRES TWO PARAMETERS ***
    
    The HTML and CSS have been done for you. 
    This is the HTML template 👇. Replace everything in UPPERCASE with property data.
    */

    // `<section class="card">
    //     <img src="/images/IMAGE">
    //     <div class="card-right">
    //         <h2>PROPERTY LOCATION</h2>
    //         <h3>PRICE GBP</h3>
    //         <p>COMMENT</p>
    //         <h3>TOTAL SIZE IN SQUARE METRES m&sup2;</h3>
    //     </div>
    // </section>`
}

const propertyList = propertyForSaleArr.map(function (property) {
    return `<section class="card">
    <img src="/images/${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${roomsM2}</h3>
    </div>
</section>`
}).join('')

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById('container').innerHTML = getPropertyHtml()



