function addtask(){
    const task_textinput=document.getElementById("todo_input");
    const task_text=task_textinput.value;
   
    if (task_text=== "") return;

    const li=document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type="checkbox";
    checkbox.onclick = ()=>{
        li.classList.toggle("completed");
    };

    const text =document.createTextNode(task_text);
    li.appendChild(checkbox);
    li.appendChild(text);
    document.getElementById("todo_list").appendChild(li);

    task_textinput.value="";
}