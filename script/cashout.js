document.getElementById("cashout-btn")
    .addEventListener("click",function () {
        //1- get the agent number & validate
        const agentNumberInput= document.getElementById("Agent-number")
        const agentNumber=agentNumberInput.value;
        if (agentNumber.length !=11) {
            alert("invalid agent number")
            return
        }
        console.log(agentNumber);
        
        //2-get the amount,validate.convert to number
        const cashoutAmountInput=document.getElementById("Amount-number")
        const cashoutAmount=cashoutAmountInput.value;
        console.log(cashoutAmount);
        
        //3-get the current balance,validate.convert to number
        const balanceElement=document.getElementById("balance")
        const balance = balanceElement.innerText
        console.log(balance);
        
        //4-calculate new balance
        const newBalance = Number(balance) - Number(cashoutAmount)
        if (newBalance<0) {
            alert('invalid amount')
            return
        }
        
        //5-get the pin and verify 
        const pinInput=document.getElementById("Pin-number")
        const pin = pinInput.value;
        if (pin ==='1234') {
            // 5.1 true :: show an alert > balance
            alert('cashout successfull')
            console.log('new balane:',newBalance);
            
            balanceElement.innerText=newBalance
        }
        else{
            // 5.2 false :: show an error alert > return
            alert('invalid pin')
            return
        }
        console.log(newBalance);
        // console.log(pin);
        
        
    })