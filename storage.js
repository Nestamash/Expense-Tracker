let inputtext = document.getElementById('amount');
let btn = document.getElementById('add');
const ul = document.getElementById('ul-list');

let itemsArray = [];
if(JSON.parse(localStorage.getItem('items'))!=null){
       itemsArray = JSON.parse(localStorage.getItem('items'));
}


// const data = JSON.parse(localStorage.getItem('items'))


function listMaker(e){
       let li = document.createElement('li');
       li.innerText = e;
       ul.appendChild(li);
}

btn.addEventListener('click', function(){
       itemsArray.push(inputtext.value);
       localStorage.setItem('items', JSON.stringify(itemsArray));
       listMaker(inputtext.value);
       inputtext.value = '';
});

//looping through the array
// data.forEach((item) => {
//        listMaker(item);
//      });
for(let i=0; i<itemsArray.length; i++){
       listMaker(itemsArray[i]);
}
