function user() {
    const name = document.getElementById('name').value;
    const lastName= document.getElementById('lastname').value;
    
    const divContent = document.getElementById('calculadora__content');
    const divRegister = document.getElementById('calculadora__usuario');
    divContent.style.display = 'block';
    divRegister.style.display = 'none';
    document.getElementById('user').innerText = 'Bienvenido '+name+' '+lastName;
    console.log(document.getElementById('name'))
}

// Función para calcular el resultado
function calcular() {
    // Obtener los valores de los inputs y la operación seleccionada
    const input1 = document.getElementById('input1').value;
    const input2 = document.getElementById('input2').value;
    const operacion = document.getElementById('operacion').value;
    let resultado;

    // Validar los inputs y convertir a número
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    
    // Condicionales para verificar que los valores sean números
    if (isNaN(num1) || isNaN(num2)) {
        resultado = 'Por favor, ingresa números válidos.';
    } else {
        // Condicionales para realizar la operación seleccionada
        if (operacion === 'sumar') {
            resultado = num1 + num2;
        } else if (operacion === 'restar') {
            resultado = num1 - num2;
        } else if (operacion === 'multiplicar') {
            resultado = num1 * num2;
        } else if (operacion === 'dividir') {
            // Condicional para evitar división por cero
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = 'No se puede dividir entre cero.';
            }
        }
    }

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}