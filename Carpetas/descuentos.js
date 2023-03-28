const btn = document.querySelector("#calcular");
const inputPrice = document.querySelector("#price");
const inputDiscount = document.querySelector("#discount");
const pResult = document.querySelector("#result");


btn.addEventListener("click", calcularPrecioDescuento);

function calcularPrecioDescuento() {
    const price = Number(inputPrice.value);
    const discount =Number(inputDiscount.value);

    if(!price || !discount) {
        pResult.innerText = "Debes llenar el formulario!"
        return
    }

    if(discount > 100) {
        pResult.innerText = "Debes ingresar un descuento valido."
        return
    }

    const newPrice = (price * (100 - discount) / 100)

    pResult.innerText = "El nuevo precio con descuento es $" + newPrice;
}