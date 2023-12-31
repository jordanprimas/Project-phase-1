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



//Build new habit card with buttons and append to DOM
function buildHabit(habit) {
   let habitCard = document.createElement("div")
   let habitName = document.createElement("h4")
   let habitDescription = document.createElement("p")
   let habitImage = document.createElement("img")
   let removeBtn = document.createElement("button")
   let incrementBtn = document.createElement("button")
   let decrementBtn = document.createElement("button")
   let totalCount = document.createElement("p")

   habitName.className = "habit-name"
   habitDescription.className = "habit-description"
   habitImage.className = "new-img"
   removeBtn.className = "remove-button"
   incrementBtn.className = "increment-button"
   decrementBtn.className = "decrement-button"
   totalCount.className = "total-count"
   

   habitName.innerText = habit.name
   habitDescription.innerText = habit.description
   habitImage.src = habit.image
   removeBtn.innerText = "Delete"
   incrementBtn.innerText = "+"
   decrementBtn.innerText = "-"
   
   // Initialize count to 0  
   let count = 0
   totalCount.innerHTML = count
   
   // Increment counter  
   const handleIncrement = () => {
        count++
        totalCount.innerHTML = count
    }

    // Decrement counter
    const handleDecrement = () => {
        count--
        totalCount.innerHTML = count
    }
   
    // Add events to buttons
    incrementBtn.addEventListener("click", handleIncrement)
    decrementBtn.addEventListener("click", handleDecrement)
    removeBtn.addEventListener('click', (e) => {
    e.target.parentNode.remove()
    })

    habitCard.append(habitName, habitDescription, habitImage, removeBtn, decrementBtn, incrementBtn, totalCount)
    appendHabitCard.append(habitCard)
}



//Build Card and render to DOM
function renderOneHabit(habit) {
    let card = document.createElement('div')
    card.className = "habit-suggestion-card"
    card.innerHTML = `
    <div class="habit-content">
        <h4>${habit.name}</h4>
        <p>${habit.description}</p>
    </div> 
    <img class="habit-img" src="${habit.imageURL}"/>   
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



