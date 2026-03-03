console.log('machine added');
function getValueFromInput(id) {
    const input =document.getElementById(id);
    const value = input.value;
    console.log(id,value);
    return value
}

// machine-->balance
function GetBalance() {
    const balanceElement =document.getElementById('balance')
    const balance =balanceElement.innerText
    console.log('current balance',Number(balance))
    return Number(balance)
    
}

// machine value ---> set balance
function setBalance(value) {
const balanceElement =document.getElementById('balance')

balanceElement.innerText = value

}

// machine id > hidden id >show id
function shoeOnly(id) {
    console.log('show only');
    
    const addmoney = document.getElementById("add-money")
    const cashout = document.getElementById("cashout")
    console.log(`addmoney ${addmoney}, cashout ${cashout}`);

    // sobaile hidden kore daw
    addmoney.classList.add("hidden")
    cashout.classList.add("hidden")

    // id wala element ke remove koro
    const selected =document.getElementById(id);
    selected.classList.remove('hidden')
    
}
