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

                <button class="done">
                   <i>done</i>
                </button>
                
                <button class="delete">
                    <i>del</i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        for(let i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll(".texts");
        for(let i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        document.querySelector("#Adding_list input").value = "";
    }
}

AddButton.addEventListener('mouseout', () =>{
    if(text.style.display === 'none'){
        text.style.display = 'block'
    }else{
        text.style.display = 'none'
    }
})