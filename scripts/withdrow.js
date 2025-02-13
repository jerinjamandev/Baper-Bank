const withdrowBtn = document.getElementById('btn-widthdrw');
withdrowBtn.addEventListener('click', function () {
    const inputWithdrow = document.getElementById('widthdrw-fild');
    const inputValue = parseFloat(inputWithdrow.value);
    const withdrowBox = document.getElementById('widthdrw-total');
    withdrowBox.innerText = inputValue;

    const totalAmount = document.getElementById('total-balance');
    const currentBalance = parseFloat(totalAmount.innerText);
    if (currentBalance === 0) {
        alert("your balence already 0");
        return false;
    }
    const withdrowBaance = currentBalance - inputValue;
    totalAmount.innerText = withdrowBaance;

    inputWithdrow.value = "";
})