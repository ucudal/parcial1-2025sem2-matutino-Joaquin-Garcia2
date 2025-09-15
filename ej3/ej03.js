/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/
function showRandomDigit() {
  let digit = Math.floor(Math.random() * 10);
  let segments = [
    [1,1,1,1,1,1,0], 
    [0,1,1,0,0,0,0], 
    [1,1,0,1,1,0,1], 
    [1,1,1,1,0,0,1], 
    [0,1,1,0,0,1,1], 
    [1,0,1,1,0,1,1], 
    [1,0,1,1,1,1,1], 
    [1,1,1,0,0,0,0], 
    [1,1,1,1,1,1,1], 
    [1,1,1,1,0,1,1]  
  ];
  let ids = ["seg-a","seg-b","seg-c","seg-d","seg-e","seg-f","seg-g"];
  for(let i=0;i<7;i++){
    let seg = document.getElementById(ids[i]);
    if(segments[digit][i]){
      seg.style.background = "#e0e000";
    }else{
      seg.style.background = "#030303";
    }
  }
}