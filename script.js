document.querySelector('#Adding_button').onclick = function(){
    if(document.querySelector('#Adding_list input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#texts').innerHTML += `
            <div class="texts">
                <span id="taskname">
                    ${document.querySelector('#Adding_list input').value}
                </span>
                <button class="delete">
                    <i>-</i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".texts");
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#Adding_list input").value = "";
    }
}