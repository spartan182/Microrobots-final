
/* Creamos Una funcion para tener nuestra posicion de inicio y de fin*/
var posicionIni=[0,0]
var posicionFin=[0,0]

function InicoFin()
{
  var posicion= Math.floor(Math.random()*6 +1);
  return posicion;
}
posicionIni=[InicoFin(),InicoFin()];
posicionFin=[InicoFin(),InicoFin()];

while 
  (posicionFin[1]==posicionIni[1])
{
  posicionFin=[InicoFin(),InicoFin()];
}
document.write("La posicion inicial es: "+posicionIni+ "<br>");
document.write("La posicion final es: "+posicionFin);

/* Creamos un array bidimensional para los numeros*/
  var numeros=
  [ [2,6,5,4,5,5],
    [4,6,6,3,2,6],
    [3,4,1,2,6,3],
    [1,4,2,5,6,1],
    [5,5,3,2,2,1],
    [4,1,4,3,1,3] ];

/*Creamos un array bidimensional para los colores*/

  var colores=["#0000FF","#FFFF00","#FF00FF","#FF0000","#FAFAFA","#01DF01"];
  var colorTablero=
  [ [colores[0],colores[1],colores[2],colores[3],colores[1],colores[0]],
    [colores[0],colores[4],colores[2],colores[3],colores[1],colores[0]],
    [colores[0],colores[1],colores[0],colores[3],colores[3],colores[2]],
    [colores[2],colores[4],colores[2],colores[3],colores[5],colores[3]],
    [colores[5],colores[4],colores[5],colores[5],colores[4],colores[1]],
    [colores[5],colores[4],colores[2],colores[4],colores[5],colores[1]] ];

/*Realizamos un for para pintar el trablero son sis colores y numeros*/
document.write("<table>");
for (let i=0; i<6; i++)
     { document.write("<tr>");
for (let j=0; j<6; j++)
{
  document.write("<td style='background-color:"+colorTablero[i][j]+"'>"+numeros[i][j]+ "</td>");
}
document.write("</tr>");
}
document.write("</table>");