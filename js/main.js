

let nombreProducto = "cafetera"
let precioUnitario = 500000
let cantidadDeseada = prompt("Ingrese la cantidad de Cafeteras que desea")
if (cantidadDeseada>= 5){
    alert("¡¡Tenes un 10% de Descuento!!")
    costoTotal= cantidadDeseada * precioUnitario
    DescuentoA= costoTotal / 100
    DescuentoB = DescuentoA *10
    Descuentototal= costoTotal - DescuentoB
alert( Descuentototal )
}
else {
costoTotal= cantidadDeseada * precioUnitario
    alert(costoTotal)

}
    
