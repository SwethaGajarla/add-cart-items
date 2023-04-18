let bgContainer = document.getElementById("bgContainer")

let heading = document.createElement("h1")

heading.textContent ="Add To Cart"
heading.classList.add("heading")
bgContainer.appendChild(heading)

let inputElement = document.createElement("input")
inputElement.type = "text"
inputElement.placeholder ="enter the items"
inputElement.style.width = "300px";
bgContainer.appendChild(inputElement)


let addBtn = document.createElement("button")
addBtn.textContent = "Add"
addBtn.classList.add("btn","btn-primary","ml-3")
bgContainer.appendChild(addBtn)

let itemsContainer = document.createElement("ul")
itemsContainer.classList.add("list-items-container")
bgContainer.appendChild(itemsContainer)

addBtn.onclick = () =>{
    let listItem = document.createElement("li")
    listItem.textContent = inputElement.value
    listItem.classList.add("list-items")
    itemsContainer.appendChild(listItem)
    inputElement.value =""
}