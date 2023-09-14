const form = document.getElementById("create-habit-form")
const appendHabitCard = document.getElementById("my-habit-card")


// Grab values from form inputs 
document.addEventListener('DOMContentLoaded', () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const newHabitObject = {
            name: e.target.new_habit_name.value,
            description: e.target.new_habit_description.value,
            image: e.target.new_habit_image.value
        }
        buildHabit(newHabitObject)
        form.reset() 
    })
})

//Build new habit card and delete button and append to DOM
function buildHabit(habit) {
   let habitCard = document.createElement("div")
   let habitName = document.createElement("h4")
   let habitDescription = document.createElement("p")
   let habitImage = document.createElement("img")
   let removeBtn = document.createElement("button")

   habitName.className = "habbit_name"
   habitDescription.className = "habbit_description"
   habitImage.className = "new_img"
   removeBtn.className = "remove_button"

   habitName.innerText = habit.name
   habitDescription.innerText = habit.description
   habitImage.src = habit.image
   removeBtn.innerText = "Completed"

   habitCard.append(habitName, habitDescription, habitImage, removeBtn)
   appendHabitCard.append(habitCard)
}














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
