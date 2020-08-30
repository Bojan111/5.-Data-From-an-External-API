
const Btn = document.querySelector('.get-jokes');

const DOM = document.querySelector('.jokes');


Btn.addEventListener('click', getJokes);

function getJokes(e){
    const number = document.querySelector('input[type="number"]').value;

    const xhr = new XMLHttpRequest();

    xhr.open('GET',`http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output = '';
           if(response.type === 'success'){
            response.value.forEach(function(item){
                output += `
               <li>${item.joke}</li>
                `
            DOM.innerHTML = output;
            })
           }
           else {
               output += `<li>Something went wrongs</li>`
           }
        }
    }

    xhr.send();

    e.preventDefault();
}