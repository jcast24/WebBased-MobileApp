import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://real-time-db-fa99a-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const shoppingListInDB = ref(database, "shoppingList")

const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")
const shoppingListEl = document.getElementById("shoppingList")


onValue(shoppingListInDB, function(snapshot) {
    // console.log(snapshot.val())
    let newArr = Object.values(snapshot.val())
})


// Functions
let addShoppingItems = (input) => {
    shoppingListEl.innerHTML += `<li>${input}</li>`
}

// Another function
let clearInput = () => {
    inputFieldEl.value = " "
}

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    addShoppingItems(inputValue)
    clearInput() 
})

