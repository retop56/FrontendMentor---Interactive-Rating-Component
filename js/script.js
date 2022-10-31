function checkForSelection() {
  const radioButtons = document.querySelectorAll('input[name="rating"]');
  let valueWasSelected = false;
  let selectedRating = undefined;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      selectedRating = radioButton.value;
      valueWasSelected = true;
      break;
    }
  }
  return [selectedRating, valueWasSelected];
}

function submit() {
  const [chosenRating, valueWasSelected] = checkForSelection();
  if (!valueWasSelected) {
    alert("Please choose a rating before submitting");
  } else {
    const selectionText = document.querySelector(".rating-selection");
    selectionText.textContent = `You selected ${chosenRating} out of 5`;

    const ratingCard = document.querySelector(".thank-you-state");
    const thankYouCard = document.querySelector(".rating-state");
    thankYouCard.classList.toggle("hide");
    ratingCard.classList.toggle("hide");
  }
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", (event) => {
  submit();
});
