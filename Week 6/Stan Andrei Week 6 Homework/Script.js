console.log("It is working !");
function validateForm() {
    var x = document.getElementById('fname');
    console.log(x.value);
    if (x.value === null || x.value==="") {
      x.style.borderColor="red";
      alert("First Name must be filled out");
      return false;
    }
    
    var y = document.getElementById('lname');
    console.log(y.value);
    if (y.value === null || y.value==="") {
      y.style.borderColor="red";
      alert("Last Name must be filled out");
      return false;
    }
   
    var z = document.getElementById('success');
    z.style.display="inline";
    alert("Form submited succesfuly !");
  }

  function inputChangeFirstName () {
    var i = document.getElementById('fname');
    i.style.borderColor="black";
  }

  function inputChangeLastName () {
    var j = document.getElementById('lname');
    j.style.borderColor="black";
  }

  function closeBaner () {
    var k = document.getElementById('success')
    k.style.display="none";
  }