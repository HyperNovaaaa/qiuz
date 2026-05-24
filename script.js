let a = document.querySelector('.btn');
let b = document.querySelector('.btn2');
let c = document.querySelector('.btn3');
let fnctn = document.querySelector('.question');
let fnctn2 = document.querySelector('.question2');
let fnctn3 = document.querySelector('.question3');
a.addEventListener('click', function() {
    fnctn.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
});
b.addEventListener('click', function() {
    fnctn2.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
});
c.addEventListener('click', function() {
    fnctn3.style.display = 'block';
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none';
});
