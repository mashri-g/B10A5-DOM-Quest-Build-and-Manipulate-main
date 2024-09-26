
document.getElementById('plus-money-b').addEventListener('click', function (event){
    event.preventDefault();

    const addMoney = getInputFieldValueById('plus-money-t');
    
const totalBalance =  getTextFieldValueByID('total-balance');


    if(totalBalance > 0 &&  addMoney <= totalBalance && addMoney > 0 && typeof addMoney === 'number'){
        const donateBalanceC = getTextFieldValueByID('plus-money');
const newBalance = donateBalanceC + addMoney;

const newAccount = totalBalance - addMoney;
document.getElementById('plus-money').innerText = newBalance;
document.getElementById('total-balance').innerText = newAccount;

// add to transition history
/*
const p = document.createElement('p');
p.innerText = ` ${addMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
console.log(p);
*/


//const e = new Date();
// document.getElementById("demo").innerHTML = e;
// should be a common function
// document.getElementById("trans-container").appendChild(p);


const d = new Date();
// document.getElementById("demo").innerHTML = d;
// should be a common function
// document.getElementById("trans-container").appendChild(p);
const div = document.createElement('div');
div.classList.add('border-2','border-r-slate-700','shadow-lg','my-6','collapse','collapse-title');
div.innerHTML = `
    <div  class=" text-xl  font-medium  ">
    ${addMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
    </div>
        <div class=" text-slate-500 text-sm">
         ${d}
        </div>
        `
        document.getElementById('trans-card').appendChild(div);
    }
    else if(addMoney <= 0){
        alert('this is not allowed')
    }
    else{
        alert('you have not sufficient balance');
    }
}
)

