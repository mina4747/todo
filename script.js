var taskat = []
// taskat=taskat.concat( localStorage.getItem("list"))
var task = document.getElementById("task") // input feild 
var list = document.getElementById("list")    // list that shows

function add() {
    taskat.push(task.value)
    saveList();
}
function saveList() {
    localStorage.setItem("list", taskat)
    show();
}
function show() {
    var templist = document.createElement('ul')
    for (var i = 0; i < taskat.length; i++) {
        let li = document.createElement("li")
        li.innerHTML = taskat[i]
        templist.appendChild(li)
    }
    list.innerHTML = templist.innerHTML
}

localStorage.clear();












































//  const task =document.getElementById('task');
// var list = document.getElementById('list');
// function add(){
//   let li = document.createElement("li");
//   li.innerHTML=task.value
//   list.appendChild(li)
//   task.value=""
//   save();
// }
// function save(){
//     localStorage.setItem( "data" , list.innerHTML )
// }
// function show(){
//     list.innerHTML= localStorage.getItem("data");
// }
// show();