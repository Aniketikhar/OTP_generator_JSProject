

function getOTP() {
    
    let length = parseInt(document.getElementById("length").value);
    
    console.log("hello there..." + length);

    let generatedOtp = generate(length);
 

    let displayOTP = document.getElementById("otp");
    displayOTP.innerHTML = generatedOtp;
   
    
}


function generate(len){

    

    const OTP = Array(len).fill().map(() => Math.floor(Math.random() * 10));

    let otpString = OTP.join(' ');

    return otpString;
}