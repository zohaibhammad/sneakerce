$(function() {
});

function formValidation(e) {
  var passnew = $("#pass").val();
  var namenew = $("#name").val();
  var pnumnew = $("#pnum").val();
  var creditnew = $("#credit").val();


  var errorMessage = document.getElementById('errorname');
  var errorMessage1 = document.getElementById('errornum');
  var errorMessage2 = document.getElementById('errorpass');
  var errorMessage3 = document.getElementById('errorcredit');

  var namee = new RegExp("^[a-zA-Z]+$");

  if(!namee.test(namenew)){
          console.log("Incorrect name");
          errorMessage.innerText = 'Please enter alphabets only';
          e.preventDefault();
      }
  else{
          errorMessage.innerText = ' ';
      }

      if(pnumnew.length > 11 || pnumnew.length < 11){
          console.log("Incorrect number")
          errorMessage1.innerText = 'Kindly enter 11 digit number';
          e.preventDefault();
      }
      else{
          errorMessage1.innerText = ' ';
      }

      var lowercase = new RegExp("[a-z]{2}");
      var uppercase = new RegExp("[A-Z]");
      var numbers = new RegExp("[0-9]{2}");
      var characters = new RegExp("[!@#$%^&]{2}");

      if((!lowercase.test(passnew)) || (!uppercase.test(passnew)) || (!numbers.test(passnew)) || (!characters.test(passnew))){
          console.log("Incorrect password")
          errorMessage2.innerText = 'Make sure you enter ATLEAST 2 lower case, 1 uppercase, 2 numbers and 2 characters';   
          e.preventDefault();
      }
      else{
          errorMessage2.innerText = ' ';
      }

      if(creditnew.length > 16 || creditnew.length < 16){
        console.log("Incorrect CNIC");
          errorMessage3.innerText = 'The card number entered is Invalid';
          e.preventDefault();

      }
      else{
          errorMessage3.innerText = ' ';
      }

      return true;

  }



