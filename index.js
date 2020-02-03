const deletbutton= document.querySelectorAll(".fa-times");
const heartbutton=document.querySelectorAll(".fa-heart");
const plusbutton=document.querySelectorAll(".fa-plus-circle")
const minusbutton=document.querySelectorAll(".fa-minus-circle")
const total = document.querySelector(".span1");

Array.from(deletbutton).map(el  => {
el.addEventListener("click",()  => el.parentElement.parentElement.remove());
});

Array.from(heartbutton).map(el =>{
    el.addEventListener("click",()=>
   { el.classList.toggle("red")})
})

  Array.from(plusbutton).map(el => {
    el.addEventListener("click", () => {
      el.nextElementSibling.innerHTML++;
      let productPrice = el.parentElement.nextElementSibling.innerHTML.replace(
        "€",
        ""
      );
      let totalPrice = total.innerHTML.replace("€", "");
      total.innerHTML = parseInt(totalPrice) + parseInt(productPrice) + "€";
    });
  });
  Array.from(minusbutton).map(el => {
el.addEventListener("click",()=>{
    if (el.previousElementSibling.innerHTML != 0){
    el.previousElementSibling.innerHTML--
    let productPrice = el.parentElement.nextElementSibling.innerHTML.replace(
        "€",
        ""
      );
      let totalPrice = total.innerHTML.replace("€", "");
      total.innerHTML = parseInt(totalPrice) - parseInt(productPrice) + "€";

}


})




  })

    
    
    
    

    

    
    