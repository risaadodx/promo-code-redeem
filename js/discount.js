document.getElementById('apply-btn').addEventListener('click', function(){
    const applyField = document.getElementById('apply-field');
    const promoCode = applyField.value;
    const discountPercentField = document.getElementById('discount-percent')
    const discountPercentString = discountPercentField.innerText;
    const discountPercent = parseFloat(discountPercentString);
    const discountPercentAmount = 50;
    const getDiscountpercent = discountPercent + discountPercentAmount;
    
    

    if(promoCode !== 'DEMO'){
        alert ('Invalid Promo');
        return;
    }
    

    discountPercentField.innerText = getDiscountpercent;

    const payNowField = document.getElementById('pay-btn-amount');
    const payNowAmountString = payNowField.innerText;
    const payNowAmount = parseFloat(payNowAmountString);
    const currentPayNowAmount = (payNowAmount / 100) * discountPercentAmount;
    payNowField.innerText = currentPayNowAmount;

    document.getElementById('another-code').addEventListener('click', function(){
        applyField.value = '';
        discountPercentField.innerText = '00';
    })
  


    console.log(typeof currentPayNowAmount);
})

