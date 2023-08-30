let todos=[]
function addtodo(){
        let title=document.getElementById("title").value
        let description=document.getElementById("description").value
        let todo={title:title,desc:description}
        if(title==""||description==""){
            alert("please enter title and description")
        }
        else{
            todos.push(todo)
            localStorage.setItem("todos",JSON.stringify(todos))
        displaytodo()
        }
}
function displaytodo(){
    let localtodos=JSON.parse(localStorage.getItem("todos")) || []
    todos=localtodos
    document.getElementById("todos").innerHTML=""
    for(let i=0; i<todos.length;i++){
        document.getElementById("todos").innerHTML+=` <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">${todos[i].title}</div>
          ${todos[i].desc}
        </div>
      </li>`
    }
}
displaytodo()
function clearAll(){
    localStorage.removeItem("todos")
    displaytodo()
}
