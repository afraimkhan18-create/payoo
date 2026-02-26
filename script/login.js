console.log('login functionality comeing');
document.getElementById("login-btn").addEventListener("click",function () {
    console.log('click btn');
    // 1-get the input mobile number
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    console.log(contactNumber);
    
    //2- get the input pin
    const inputPin = document.getElementById("input-Pin")
    const pinNumber = inputPin.value;
    console.log(pinNumber);

    //3- match pin & mobile number
    if (contactNumber ==1234567890 && pinNumber ==1234) {
        // 3.1- true alert :::> homepage
        alert('your are success')
        window.location.assign("/home.html")
    }
    //  3.2- false alert :::> return
    else{
        alert('Login Error')
    }
})
