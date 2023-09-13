const form = document.getElementById("create-habit-form")


// 
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const newHabitObject = {
            name: e.target.new_habit_name.value,
            description: e.target.new_habit_description.value,
            image: e.target.new_habit_image.value
        }
        console.log(newHabitObject)


    })

})















//Build Card and render to DOM
function renderOneHabit(habit) {
    let card = document.createElement('p')
    card.innerHTML = `
    <div class="habit-content">
        <h4>${habit.name}</h4>
        <p>${habit.description}</p>
    </div> 
    <img class="habit-img" src="${habit.imageURL}>   
    `
   document.getElementById("habit-idea-card").appendChild(card)
}

//Get Data 
function getAllHabits(){
    fetch(" http://localhost:3000/habitData")
    .then(res => res.json())
    .then(habitdata => habitdata.forEach(habit => renderOneHabit(habit)))

}

getAllHabits()
