var num = document.getElementById("num");
var amount = num.value;
function cong() {
    amount++;
    document.getElementById("num").value = amount;
};
function tru() {
    if (amount > 1) {
        amount--;
        document.getElementById("num").value = amount;
    }
};
num.addEventListener("input", () => {
    amount = num.value;
    amount = parseInt(amount);
    amount = isNaN(amount) ? 1 : amount;
    document.getElementById("num").value = amount
})