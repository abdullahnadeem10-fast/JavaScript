function addRecommendation() {
  const input = document.getElementById('recommendationInput');
  const text = input.value.trim();

  if (text !== "") {
    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.textContent = text;
    document.getElementById('recommendation-list').appendChild(newCard);

    alert("Recommendation submitted successfully!");
    input.value = '';
  } else {
    alert("Please enter something first!");
  }
}
