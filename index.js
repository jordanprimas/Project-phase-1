



















//Build Card and render to DOM
function renderOneHabit (habit) {
    let card = document.createElement('p')
    card.innerHTML = `
    <div class="habit-content">
        <h4>${habit.name}</h4>
        <p>${habit.description}</p>
    </div> 
    <img class="habit-img" src="${habit.imageURL}>
    `
}