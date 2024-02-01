

const container = document.querySelector('.container');
const field= document.querySelector('#task');
const addButton= document.querySelector('#add');
const taskList= document.querySelector('#list');

addButton.addEventListener('click',function(){
     const taskText= field.value;
     if(taskText.trim()!==''){
        const taskDiv=document.createElement('div');
        taskDiv.className='box';
        taskDiv.textContent=taskText;

        const editButton=document.createElement('button');
        editButton.className='button';
        editButton.textContent='Edit';
        editButton.classList.add('edit');

        const deleteButton = document.createElement('button');
        deleteButton.className='button';
        deleteButton.textContent='Delete';
        deleteButton.classList.add('delete');

        taskDiv.appendChild(editButton);
        taskDiv.appendChild(deleteButton);

        taskList.appendChild(taskDiv);

        field.value='';

        deleteButton.addEventListener('click',deleteEvent);
        editButton.addEventListener('click',editEvent);

     }else{
        alert('Please enter a valid task-name');
     }
});

function deleteEvent(event){
    const targetDiv= event.target.parentNode;

    targetDiv.remove();
}


function editEvent(event){

    const divToEdit= event.target.parentNode;
    const prevText= divToEdit.textContent.replace('EditDelete','');
    
    const editField = document.createElement('input');
    editField.setAttribute('type','text');
    editField.value=prevText ;
    
    const doneButton= document.createElement('button');
    doneButton.classList.add('button','done');
    doneButton.textContent='Done';

    divToEdit.textContent='';
    divToEdit.appendChild(editField);
    divToEdit.appendChild(doneButton);

    editField.focus();

    doneButton.addEventListener('click',function(event){
        const editedText= editField.value.trim();

        if(editedText !== ''){
         divToEdit.textContent=editedText;
         editField.remove();
         doneButton.remove();

         const editButton=document.createElement('button');
        editButton.classList.add('edit','button');
        editButton.textContent='Edit';
       

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('button','delete');
        deleteButton.textContent='Delete';
       

        divToEdit.appendChild(editButton);
        divToEdit.appendChild(deleteButton);

        deleteButton.addEventListener('click',deleteEvent);
        editButton.addEventListener('click',editEvent);


        }else{
            alert('Please enter a valid task-name');
        }




    })

}






