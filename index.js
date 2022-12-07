
alert("WELCOME TO BHAVYA'S RESTAURANT !");
for(var i=0;i<document.querySelectorAll(".click").length;i++){
  document.querySelectorAll(".click")[i].addEventListener("click",handleClick);
  function handleClick(){
    alert("welcome to details for bookings.");
  }
}
