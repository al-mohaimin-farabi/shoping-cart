function updateProductNumber(product,price,isIncreasing){
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
    if(isIncreasing == true){
        productNumber= parseInt(productNumber) + 1;
    }
    else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    else{
        alert("Please give a Shothik input")
    }
    productInput.value = productNumber;

    // update product  total
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;

    // calculate subtotal
    calculateTotal()
}

function getInputValue(product){
    const productInput = document.getElementById(product+'-number')
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = tax + subTotal;
    // console.log(subTotal);

    // update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    // console.log(tax);
}

// handle case event
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber('case',59,false);
});

// handle phone event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1229,true);
});

document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone',1229,false);
});

