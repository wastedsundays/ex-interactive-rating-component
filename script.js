const btn = document.querySelector("button");
const rating = document.querySelector(".rating");
const results = document.querySelector(".results");
const ratingSection = document.getElementById("rating-section");
let userRating = 0;

function displayRadioValue() {
    var ele = document.getElementsByName('rate');
      
    for(i = 0; i < ele.length; i++) {
        userRating = ele[i].value;
        //change the message rating number to = the input number
        document.getElementById('user-rating').innerHTML = userRating;
        //hide the rating 'screen', display the thank you 'screen'
        rating.style.display = "none";
        results.style.display = "block";
    }
}


btn.onclick = displayRadioValue;

