let produit = document.querySelectorAll('.function');
//console.log(produit);
for (let i = 0; i < produit.length; i++){
    let price = produit[i].children[1].innerText;
    let pry = + price;

//console.log(typeof(pry));


const plus = document.querySelectorAll('.plus');
        minus = document.querySelectorAll('.minus');
        num = document.querySelectorAll('.num');
        
        let a = 1;

        plus.addEventListener('click', () => {
          a++;
          a = (a < 10) ? "0" + a : a;
          num.innerText = a;
          console.log(a);
        });
}