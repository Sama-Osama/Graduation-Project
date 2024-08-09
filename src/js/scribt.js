next = document.getElementById("next");
emailDiv = document.querySelector(".email");
verifyDiv = document.querySelector(".verfiy");
done = document.querySelector("#done");
form = document.querySelector(".newPass"); 
conn = document.getElementById("conn");
appForm = document.querySelector(".appoinment-form");
li = document.getElementById("big1");
table = document.querySelector(".table");







sec=document.querySelector("banner");

next.addEventListener("click", function(event) {
    event.preventDefault();

    emailDiv.style.display = "none";
    verifyDiv.style.display = "block";
    done.style.display = "block";
    next.style.display = "none";
});

done.addEventListener("click", function(event) {
    event.preventDefault();

    verifyDiv.style.display = "none";
    done.remove();
    form.style.display = "block";
    appForm.style.display="none";
});

function handleClick(event) {
    event.preventDefault();
    
    var confirmation = confirm("Are you sure you want to submit the form?");
    
    if (confirmation) {
      window.location.href = "another_page.html";
    }
  }


li.addEventListener("click",function(event){
    event.preventDefault();

  sec.style.display="none";
  table.style.display="block";
})

  document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("input_52");
    console.log(submitButton);

    if (submitButton) {
      submitButton.addEventListener("click", handleClick);
    }
  });
  

