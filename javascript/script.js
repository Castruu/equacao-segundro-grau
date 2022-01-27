function delta(a, b, c) {
    return Math.pow(b, 2) - 4*a*c
} 


function bhaskara(a, b, c) {
    var delt = delta(a, b, c);
    if(parseFloat(delt) < 0) {
        alert("Delta deve ser maior do que 0");
        return null;
    }
    let x1 = ((-b + Math.sqrt(delt))/(2 * a)).toFixed(2);
    let x2 = ((-b - Math.sqrt(delt))/(2 * a)).toFixed(2);
    return [x1, x2]
}



function calcular() {
    const a = document.getElementById("a").value;
    const b = document.getElementById("b").value;
    const c = document.getElementById("c").value;
    let result = bhaskara(a, b, c);
    document.getElementById("result").innerText = "X1 = " + result[0] + ", X2 = " + result [1];
}


