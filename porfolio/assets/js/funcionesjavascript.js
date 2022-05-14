function func_ej1(){
    let ej1_n1 = parseFloat( document.getElementById ("ej1_n1").value) 
    let ej1_n2 = parseFloat( document.getElementById ("ej1_n2").value) 
    let ej1_n3 = parseFloat( document.getElementById ("ej1_n3").value) 

    let numeromayor = Math.max(ej1_n1, ej1_n2, ej1_n3);
    let numeromenor = Math.min(ej1_n1, ej1_n2, ej1_n3);

    document.getElementById("mayor").value = numeromayor
    document.getElementById("menor").value = numeromenor

}      




function func_ej2(){
    let ej2_n1 = parseFloat( document.getElementById ("ej2_n1").value)
    let ej2_n2 = parseFloat( document.getElementById ("ej2_n2").value)

    let suma = ej2_n1 + ej2_n2
    document.getElementById("resultadoej2").value = suma




}