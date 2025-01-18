// Imports
// const { pathToFileURL } = require('url');
//const selectItems = require('../../db/list-data');

// DOM Elements
const todoListElement = document.getElementById("todoListElement");
const refreshButton = document.getElementById("refreshButton");
const addItemButton = document.getElementById("addItemButton");
const itemInputField = document.getElementById("itemInputField");
const itemIdInputField = document.getElementById("itemIdInputField");
const itemPriorityUpdateField = document.getElementById("itemPriorityInputField");
const updateItemButton = document.getElementById("updateItemButton");
const deleteItemButton = document.getElementById("deleteItemButton");

// Event Listeners
refreshButton.addEventListener("click", (event) => {
    refreshTodoList();
});

addItemButton.addEventListener("click", (event) => {
    addItemToTodoList();
    refreshTodoList();
});

updateItemButton.addEventListener("click", (event) => {
    updateItem();
    refreshTodoList();
})

deleteItemButton.addEventListener("click", (event) => {
    deleteItem();
    refreshTodoList();

})

// DB Functions
async function refreshTodoList(url = 'http://localhost:3000/read') {
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url

    })
        .then((response) => response.json())
        .then((response) => {
            // console.log(response); // JSON data parsed by `data.json()` call
            todoListElement.textContent = '';
            for (let element of response) {
                // console.log(element)
                const todoList = JSON.stringify(element);
                const list = document.createElement("li");
                list.textContent = todoList;
                list.id = element["ID"];
                todoListElement.appendChild(list);
            }

        });
}

async function addItemToTodoList(url = 'http://localhost:3000/create') {
    const itemInput = itemInputField.value;
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url,

        body: JSON.stringify({ item: itemInput, category: 'na', user: 'flostar', 'priority': '1' })

    })

    refreshTodoList();

}

async function updateItem(url= 'http://localhost:3000/update') {
    const idInput = itemIdInputField.value;
    const itemPriorityUpdateValue = itemPriorityUpdateField.value;
    const oldTodo = JSON.parse(document.getElementById((idInput).toString()).textContent);
    const dbItem = oldTodo["item"];
    const dbUser = oldTodo["user"];

    const response = await fetch(url, {
        method: 'PUT', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url,

        body: JSON.stringify({ id: idInput, item: dbItem, user: dbUser, priority: itemPriorityUpdateValue })
        
    })

    refreshTodoList();
}

async function deleteItem(url= 'http://localhost:3000/delete') {
    const idInput = itemIdInputField.value;


    const response = await fetch(url, {
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url,

        body: JSON.stringify({ id: idInput })
        
    })

    refreshTodoList();
}

window.onload = async () => {
    let data = await refreshTodoList();
}