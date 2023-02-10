
const expense = document.getElementById('expenses');
const expense2 = document.getElementById('expense');
const income = document.getElementById('income');
const balance = document.getElementById('balance');
const amount = document.getElementById('amount');
const date = document.getElementById('date');
let table1 = document.getElementById('expenseTable');
let addbtn = document.getElementById('add');
const TransactionType = document.getElementsByName('selector');

const getTransactionType = () => document.querySelectorAll('[name=selector]:checked')[0].value;


// const radio = document.querySelector('input[name="selector"]:checked').value;

let userInput = [];
if(JSON.parse(localStorage.getItem('data'))!=null){
       userInput = JSON.parse(localStorage.getItem('data'));
}


addbtn.addEventListener('click', showExpense());
addbtn.addEventListener('click', updateBalance());

addbtn.addEventListener('click', function(){
      

 if(expense.value == '' || amount.value == '' || date.value == ''){

  alert('Please fill all the fields!!!');
   
  return;

 }else{

       const userExpense = {
              id: generateID(),
              type: getTransactionType(),
              date: date.value,
              expense: expense.value,
              amount: amount.value
              
       };

       userInput.push(userExpense); 
       localStorage.setItem('data', JSON.stringify(userInput));
       location.reload();
 }
});

 
       function showExpense(){
              for(let i=0; i<userInput.length; i++){
               
                     let tr = document.createElement('tr');
                     let td = document.createElement('td');
                     td.innerText = userInput[i].date;
                     tr.append(td); 
                     date.value = '';
             
                     let td2 = document.createElement('td');
                     td2.innerText = userInput[i].expense;
                     tr.append(td2);
                     expense.value = '';
             
                     let td3 = document.createElement('td');
                     td3.innerText = 'Ksh. ' +(userInput[i].amount);
                     tr.append(td3);
                     amount.value = '';

                     const btn4 = document.createElement('td');
                     btn4.innerHTML = `
                     <button class="deletebtn" onclick ="remove(${userInput[i].id})">delete</button>`;
                     tr.append(btn4);
             
                     table1.appendChild(tr);          
             }
       }
      //removing item from the localstorage by id 
 function remove(id){
      
    let  userInput = JSON.parse(localStorage.getItem('data'));

    userInput .forEach(function(item, index){

      if(id === item.id){
            userInput.splice(index, 1);
      }
    });

    localStorage.setItem('data', JSON.stringify(userInput));
    location.reload();
 }
 //generating ids for the items
 function generateID(){
      return Math.floor(Math.random() * 100000);
        
 }
// calculating income expense and balance
 function updateBalance(){
      var totalIncome = 0,
          totalexpense = 0,
          totalBalance = 0;
     
      userInput.forEach(function(item, index){   
        if(item.type === 'income'){

          totalIncome += Number(item.amount);
          
        } else if (item.type === 'expense'){
          totalexpense += Number(item.amount);

        }
          totalBalance = totalIncome - totalexpense;    
        
      });

      balance.innerHTML = "Ksh. " +totalBalance.toFixed(2);
      income.innerHTML = "Ksh. " +totalIncome.toFixed(2);
      expense2.innerHTML = "Ksh. " +totalexpense.toFixed(2);
      console.log(totalBalance, totalIncome, totalexpense);
  
   }
 //delete all the entries
 function clearAll1(){
       localStorage.removeItem('data');
       location.reload();
 }

        
      




