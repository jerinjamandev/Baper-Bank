const deposiebtn = document.getElementById('btn-deposit');
deposiebtn.addEventListener('click', function () {
    const depositeInput = document.getElementById('deposit-fild');
    const depositeInputValue = depositeInput.value;
    if (depositeInput.value == "") {
        return false;
    }
    const depositeValueFlot = parseFloat(depositeInputValue);
    const showDeposite = document.getElementById('deposid-total');
    showDeposite.innerText = depositeValueFlot;


    const totalAmount = document.getElementById('total-balance');
    const amountNumber = parseFloat(totalAmount.innerText);
    const addBalance = amountNumber + depositeValueFlot;
    totalAmount.innerText = addBalance;
    depositeInput.value = '';


})