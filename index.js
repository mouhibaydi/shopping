let add = document.querySelector(".add")

add.addEventListener("click", () => {
  let firstdiv = document.querySelector(".div3")
  let newdiv = document.createElement('div')
  let button1 = document.createElement('button')
  let button2 = document.createElement('button')
  let contenttoadd = document.createElement('p')
  console.log(contenttoadd)
  let para = document.querySelector("input")
  button1.innerHTML = "complete"
  button2.innerHTML = "delete"
  contenttoadd.innerHTML=para.value
  newdiv.appendChild(contenttoadd)
  newdiv.appendChild(button1)
  newdiv.appendChild(button2)

  firstdiv.appendChild(newdiv)

button1.addEventListener("click",()=>{
if(button1.innerHTML==="complete"){
  button1.previousElementSibling.classList.add("through")  
button1.innerHTML = "undo"

}else{
  button1.innerHTML="complete"
  button1.previousElementSibling.classList.add("nothrough")
}


})
button2.addEventListener("click",()=>{

button2.parentElement.remove()


})




})







