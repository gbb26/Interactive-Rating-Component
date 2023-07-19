var ratings = 0;

const handleRating = (rating) => {
  ratings = document.getElementById(rating).innerHTML;
};
function handleSubmit(ratings) {
  if (ratings > 0) {
    document.querySelector(".card-1").style.display = "none";
    document.querySelector(".thank-you-card").style.display = "initial";
    document.querySelector(".rating-text").innerHTML =
      "You selected " + ratings + " out of 5";
  } else {
    console.log("Rating is Mandatory...");
  }
}

counter = 1
const intervalId = setInterval(() => {
  console.log(counter);
  counter = counter + 1
  if (counter === 5) {
    clearInterval(intervalId);
  }
}, 1000);