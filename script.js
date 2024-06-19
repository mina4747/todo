if (JSON.parse(localStorage.getItem("list"))) {
    var taskat = JSON.parse(localStorage.getItem("list"))
    var task = document.getElementById("task") // input feild 
    var list = document.getElementById("list") // list that shows the tasks
    show()
} else {

    var taskat = []
    var task = document.getElementById("task") // input feild 
    var list = document.getElementById("list") // list that shows the tasks
}

function add() {
    if (task.value != "") {
        taskat.push(task.value)
        localStorage.setItem("list", JSON.stringify(taskat))
        show();
        task.value = ""
    } else {
        alert("you must enter something")
    }
}

function show() {
    list.innerHTML = ``;
    taskat.forEach((element) =>
        list.innerHTML += `
    <div class="row"> <li>${element} </li>
        <div class="buttons">
            <button>check</button>
            <button>remove</button>
        </div>
    </div><br>
    `
);

}
function empty(){
    taskat=[]
    localStorage.clear();
    window.location.reload();
}

function remove(){
    
}