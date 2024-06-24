if (JSON.parse(localStorage.getItem("list"))) {
   
    var taskat = JSON.parse(localStorage.getItem("list"))
    var task = document.getElementById("task") // input feild 
    var list = document.getElementById("list") // list that shows the tasks
    show()
} else {
    obj = { value: "", checked: false }
    var taskat = [obj]
    var task = document.getElementById("task") // input feild 
    var list = document.getElementById("list") // list that shows the tasks
}

function add() {
    if (task.value != "") {
         obj= { value:task.value , checked:false}
        taskat.push(obj)
        localStorage.setItem("list", JSON.stringify(taskat))
        show();
        task.value = ""
    } else {
        alert("you must enter something")
    }
}

function show() {
    let counter =0;
    list.innerHTML = ``;
    taskat.forEach((element) => {if( element.value!=""  && element.checked== false){

        list.innerHTML += `
    <div class="row"> <li id="taask">${element.value}</li>
        <div class="buttons">
            <button  onclick=check(${counter})>check</button>
            <button onclick=remove(${counter})>remove</button>
        </div>
    </div><br>
    `;
    counter++;
    } else if (element.value != "" && element.checked == true){

        list.innerHTML += `
    <div class="row"> <li id="taask"><s>${element.value}</s></li>
        <div class="buttons">
            <button  onclick=uncheck(${counter})>uncheck</button>
            <button onclick=remove(${counter})>remove</button>
        </div>
    </div><br>
    `;
        counter++
    }else{
        counter++;
    }
});

}
function empty(){
    taskat=[]
    localStorage.clear();
    window.location.reload();
}
function check( counter){
     taskat[counter].checked=true
    localStorage.setItem("list", JSON.stringify(taskat))
    show();
    }
function uncheck(counter){
    taskat[counter].checked = false
    localStorage.setItem("list", JSON.stringify(taskat))
    show();
}    

function remove(counter){
    taskat.splice(counter, 1)
    localStorage.setItem("list", JSON.stringify(taskat))
    show();
}