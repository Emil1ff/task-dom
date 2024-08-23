let form = document.createElement('h2');
form.textContent = 'Form';
let cardBody = document.getElementsByClassName('card-body')[0];
let firstChild = cardBody.firstChild;
cardBody.insertBefore(form, firstChild);


let listItems = document.querySelectorAll('li');
for (let i = 0; i < listItems.length; i++)
    if (i % 2 == 0){
        listItems[i].style.backgroundColor = 'white';
    } else {
        listItems[i].style.backgroundColor = 'lightblue';
    }
