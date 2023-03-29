const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputCoupon = document.querySelector("#coupon");
const pResult = document.querySelector("#result");


btn.addEventListener("click", calcularPrecioDescuento);

function calcularPrecioDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon) {
        pResult.innerText = "Debes llenar el formulario!"
        return
    }

    if(coupon > 100) {
        pResult.innerText = "Debes ingresar un descuento valido."
        return
    }

    const newPrice = (price * (100 - coupon) / 100)

    pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}