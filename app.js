
// Creacion de Funciones flecha para calcular precio neto y bruto
const precioBruto  = (a) => a * 1.19;
const precioNeto = (a) => a / 1.19;

let i=1

while(i>0){


// Elegir opcion a calcular
let opcion = parseInt(prompt('Opciones: [1]-Cacular P.Bruto  [2]-Calcular P.Neto [0]-Para salir'));


// Condicion para cada opcion

// Calcula Precio Bruto (c/iva)
if(opcion == 1){
    // Input Precio parseado a float
let precioConsultado = parseFloat(prompt('Ingrese Precio para calcular Bruto '));
    preciofinal = precioBruto(precioConsultado)
    alert(' El precio Bruto es : '+ preciofinal)

// Calcula Precio Neto (c/iva)
}else if (opcion == 2){
    // Input Precio parseado a float
let precioConsultado = parseFloat(prompt('Ingrese Precio para calcular Neto'));
    preciofinal = precioNeto(precioConsultado)
    alert(' El precio Neto es : '+ preciofinal)

// Opcion 0 - Break    
}else if (opcion == 0){
    alert( ' Haz Salido... Para Reniciar apreta [F5] o recarga la pagina... Nos vemos!')
    break
}
// Opcion incorrecta --- Retorna al incio   
else{
    alert('Opcion Incorrecta--- Intentalo denuevo ...')
    
}
}
