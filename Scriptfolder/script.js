function handleclick(event)
{
    
    if(event.target.textContent === 'Submit' ) //submit button
    {
        console.log('Submit clicked');

    }
    else if (event.target.textContent === 'Change Background Color' ) // color button
    {
        console.log('Color clicked');
        document.body.classList.toggle('bgcolor')
    }
}

document.body.addEventListener('click',handleclick)