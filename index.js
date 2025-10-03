let num = document.querySelector('.num');
let text = document.querySelector('.text');
let rand_num = Math.floor(Math.random() * 100) + 1;

num.addEventListener('input', function() {
    let value = Number(num.value);
    if(value<rand_num) {
        text.innerHTML = "высше";
    }else if(value>rand_num) {
        text.innerHTML = "меньше";
    }else {
        text.innerHTML = "ПРЯМО В ТОЧКУ 🤖, ПОРОБУЙ УГАДАТЬ СЛЕДУЮЩЕЕ";
        rand_num = Math.floor(Math.random() * 100) + 1;
    }
console.log(rand_num);
});
