
let btn = document.querySelector('#btn');
let price = document.querySelector('#price').getAttribute('data-cena');
price = parseInt(price);

function PDV() {
    let tax = ((price*20)/100)+price;
    alert(`Cena sa PDV-om iznosi ${tax}`);

};

btn.addEventListener('click', PDV)
// btn.addEventListener('click', function() {
//     let tax = ((price*20)/100)+price;
//     alert(`Cena sa PDV-om iznosi ${tax}`);

// })