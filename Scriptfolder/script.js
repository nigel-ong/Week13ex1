function handleclick(event)
{
    
    if(event.target.textContent === 'Submit' ) //submit button
    {
        console.log('Submit clicked');
        submitHandler()

    }
    else if (event.target.textContent === 'Change Background Color' ) // color button
    {
        console.log('Color clicked');
        changeBG();
    }
}

function changeBG(){
    document.body.classList.toggle('bgcolor')
}

let students=[];

function submitHandler(){
    const firstnameInput = document.querySelector('#firstname')
    const lastnameInput = document.querySelector('#lastname')
    const prognameInput = document.querySelector('#progName')

    let student = { 
    firstName : firstnameInput.value,
    lastName : lastnameInput.value, 
    progName : prognameInput.value,
    }

    students.push(student);
    console.log(students);
updateList(student);
firstnameInput.value = '';
lastnameInput.value = '';
prognameInput.value = '';

}

document.body.addEventListener('click',handleclick)

function updateList(student)
{
    const CITList = document.querySelector('.CIT');
    const CSTList = document.querySelector('.CST');
    const listItem = document.createElement('li')

listItem.textContent =`${student.firstName} ${student.lastName}`
    if(student.progName === 'CIT'){
    CITList.appendChild(listItem)}
    else if (student.progName === "CST"){
    CSTList.appendChild(listItem)}


}