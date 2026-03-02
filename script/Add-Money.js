document.getElementById("Add-Money-Btn")
    .addEventListener('click',function() {
        // 1-get bank account
        const bankAccount=getValueFromInput('add-money-bank')
        if (bankAccount == 'Select A Bank') {
            alert('please select a bank');
            return
        }

        //2- get bank account number
        const account=getValueFromInput('Add-money-number')
        if (account.length !== 11) {
            alert('invalid account')
            return
        }
        
        // 3- get add-Money amount
        const amount = getValueFromInput('Add-money-amount')
        const currentBalance= GetBalance() 
        const newBalance = currentBalance + Number(amount)
        
        // 4-get pin
        const pin = getValueFromInput("Add-Money-Pin")
        if (pin == '1234') {
             alert(`Add money success from
             ${bankAccount} at
              ${new Date()}`)   
            setBalance(newBalance)
        }
        else{
            alert('invalid pin')
        }
        return
    })