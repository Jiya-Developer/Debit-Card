function debitCard(){
    const name = document.getElementById("name").value;
     const mobile = document.getElementById("mobile").value;
     const cnic = document.getElementById("cnic").value;
     const dob = document.getElementById("DOB").value;
  const today = new Date()
   date = today.getDate()
    month =today.getMonth()+1
  year = today.getFullYear()
  expireYear = year + 5
  var information = {
    holderName : name,
    cardNumber : (Math.random() * 5373162549715059).toFixed(),
    mobileNumber : mobile,
    cnicNumber : cnic,
    dateOfBirth : dob , 
    dateOfIssue : date +"/" + month + "/" + year,
    dateOfExpiry : date + "/" + month + "/" + (year + 5) 
  }
  document.getElementById("issue-date").innerHTML = information.dateOfIssue;
  document.getElementById("expiry-date").innerHTML = information.dateOfExpiry;
  document.getElementById("card-number").innerHTML = information.cardNumber;
  document.getElementById("card-holder").innerHTML =information.holderName;
  document.getElementById("card-information").style.visibility = "hidden";
    document.getElementById("card-section").style.visibility = "visible";
    return
  }
  function anotherCard(){
  
     document.getElementById("card-information").style.visibility = "visible";
    document.getElementById("card-section").style.visibility = "hidden";
  }