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


addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value
    push(shoppingListInDB, inputValue)
    addShoppingItems(inputValue)
    clearInput() 
})

onValue(shoppingListInDB, function(snapshot) {
    let newArr = Object.values(snapshot.val())
    clearShoppingListEl()
    for (let i=0; i<newArr.length; i++) {
        addShoppingItems(newArr[i])
    }
})

function clearShoppingListEl() {
    shoppingListEl.innerHTML = ""
}

function clearInput() {
    inputFieldEl.value = ""
}

function addShoppingItems(input) {
    shoppingListEl.innerHTML += `<li>${input}</li>`
}




