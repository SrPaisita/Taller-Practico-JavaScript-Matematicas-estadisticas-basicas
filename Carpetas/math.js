

console.group("Cuadrado")

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4 + "cm";
const areaCuadrado = ladoCuadrado * ladoCuadrado + "cm2";

console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
});

console.groupEnd("Cuadrado")

console.group("Triangulo")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTrianguloBase = 4;
const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase;
const areaTriangulo = (ladoTriangulo1 * ladoTriangulo2) / 2

function calcularTriangulo(lado1, lado2, base, altura){
    return{
        perimetro: lado1 + lado2 + base,
        area: (base * altura) / 2,
    };
}

function calcularAlturaTriangulo(lado1, base) {
    if(lado1 == base) {
        console.warn("Este no es un triangulo isosceles")
    }else {
        return Math.sqrt((lado1 ** 2) - (base ** 2) / 4)
    }
}

function calcularAlturaTrianguloEscaleno(lado1e, lado2e, basee) {
    const semiperimetro = (lado1e + lado2e + basee) / 2;

    if(lado1e == lado2e || lado1e == basee || basee == lado2e) {
        console.warn("Esto no es un triangulo escaleno")
    }else if (lado1e !== lado2e || lado1e !== basee || basee !== lado2e) {
        const h = ((2/lado1e) * (Math.sqrt(semiperimetro * (semiperimetro - lado1e) * (semiperimetro - lado2e) * (semiperimetro - basee))))

        console.log('La altura del triangulo escaleno "H" es ' + h)
    }else {
        console.warn("Esto no es un triangulo")
    }
}
console.log({
    ladoTriangulo1,
    ladoTriangulo2,
    ladoTrianguloBase,
    alturaTriangulo,
    perimetroTriangulo,
    areaTriangulo,
})

console.groupEnd("Triangulo")

console.group("Circulo")

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const pi = 3.14159;

const circunferencia = diametroCirculo * pi;
const areaCirculo = (radioCirculo ** 2) * pi;

console.log({
    radioCirculo,
    diametroCirculo,
    pi,
    circunferencia,
    areaCirculo,
})

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2)
    return {
        circunferencia: diametro * Math.PI,
        area: radioAlCuadrado * Math.PI,
    }
}
console.groupEnd("Circulo")