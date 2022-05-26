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
function func_ej03(){
    let suma = 0
    let ej3_c1 = (document.getElementById("ej3_c1").value);
    let ej3_c2 = parseFloat(document.getElementById("ej3_c2").value);
    let ej3_acu1 = ej3_c1
    for (let index = 1; index < ej3_c2; index++) {
        ej3_acu1 = ej3_acu1 + ej3_c1
    }
    alert(ej3_acu1) 

}
function func_ej04(){

    let ej4_c1 = parseFloat(document.getElementById("ej4_c1").value);
    let ej4_c2 = parseFloat(document.getElementById("ej4_c2").value);

    if (ej4_c1 != "" ){
    ej4_resultado = ((ej4_c1*1.8)+32);
    document.getElementById("ej4_resultado").value = ej4_resultado;
    }
    else
    if (ej4_c2 != "")
    ej4_resultado = ((ej4_c2-32)*0.5556);
    document.getElementById("ej4_resultado").value = ej4_resultado;

}
function func_ej05()
{
    let ej5_c1 = document.getElementById("ej5_c1").value;
    let ej5_char = ej5_c1.length
    
    document.getElementById("ej5_resultado").value = ej5_char;
    }

function func_ej06() {
        let ej6_c1 = parseFloat(document.getElementById("ej6_c1").value);
        ej6_c1 = ej6_c1 % 2
        if (ej6_c1 == 0)
        document.getElementById("ej6_resultado").value = "El numero es par";
        else
        document.getElementById("ej6_resultado").value = "El numero es impar";
        }

 function func_ej07(){
            
            let ej7_c1 = parseInt(document.getElementById("ej7_c1").value);
            let ej7_c2 = parseInt(document.getElementById("ej7_c2").value);
            let ej7_acu1 = ""
            
           for (let index = ej7_c1 ; index <=  ej7_c2; index++ ){
               if (index % 3){}
               else { ej7_acu1= ej7_acu1 +" "+index;
               document.getElementById("ej7_resultado").value = ej7_acu1;
               }   
              
           }
                

        }

   function func_ej08(){
            
            let ej8_c1 =arseInt(document.getElementById("ej8_c1").value);
            let ej8_c2 = parseInt(document.getElementById("ej8_c2").value);
            let cont = 1
            for (let index = ej8_c1; index < ej8_c2; index++) {
                if (((ej8_c1 % cont)== 0) ||((ej8_c1 == cont))){
                alert(cont)
                cont=cont+1    
                }
                else
                cont = cont + 1
               ;
                
            }     
            }
    
        function func_ej09(){
                let ej9_c1 = document.getElementById("ej9_c1").value;
                let ej9_c2 = document.getElementById("ej9_c2").value;
                let ej9_c3 = document.getElementById("ej9_c3").value;
                let ej9_c4 = document.getElementById("ej9_c4").value;
                ej9_resultado =  "Mi nombre es " + ej9_c1 + " " + ej9_c2 + ", tengo " + ej9_c3 + " Años." + " Nací en la ciudad de " + ej9_c4 + "."
                alert(ej9_resultado);
            }
        function func_ej10()
        {
            let ej10_c1 = parseInt(document.getElementById("ej10_c1").value);
            let ej10_c2 = parseInt(document.getElementById("ej10_c2").value);
            let ej10_resultado = ej10_c1

            for (let index = ej10_c1; index <= ej10_c2; index++) {
                alert(ej10_resultado)
                ej10_resultado = ej10_resultado + 1  
                  
            }
        }