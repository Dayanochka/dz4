let btn1 = document.querySelector('.btnminys')
let btn2 = document.querySelector('.btnplus')
let int = document.querySelector('.numb')

let integer = 0;


btn1.addEventListener("click",() => {
    integer -= 1
    int.textContent = integer
}) 

btn2.addEventListener("click",() => {
    integer += 1
    int.textContent = integer;
}) 