const btn = document.querySelector("button");
const rating = document.querySelector(".rating");
const results = document.querySelector(".results");
const ratingSection = document.getElementById("rating-section");
let userRating = 0;

function displayRadioValue() {
    //get the value of the selected 'button'
    userRating = document.querySelector("input[type='radio'][name=rate]:checked").value;
      //update the response message with the selected value
        document.getElementById('user-rating').innerHTML = userRating;
        //hide the rating 'screen', display the thank you 'screen'
        rating.style.display = "none";
        results.style.display = "block";
    }

btn.onclick = displayRadioValue;

