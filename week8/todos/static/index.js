// this code runs asynchronously
async function getToDos() {
    const response = await fetch("https://localhost:3000/api/todos")
    // console.log(response)
    const data = await response.json()
    console.log(data.text, "\n")
    // console.log("getData finished")

    const ul = document.querySelector("ul")
    data.forEach(todo => {
        const li = document.createElement("li")
        li.textContent = todo.description
        ul.appendChild(li)
    });
}

getToDos()