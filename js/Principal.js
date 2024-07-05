/*2. Conociendo los resultados de varios juegos de tu equipo de fútbol, donde 1 es ganar 
y 0 es perder, hacer un programa que indique el porcentaje de juegos que ganaste.
Ej.
Resultados de 6 juegos: 1, 1, 0, 1, 0, 1, 1
Salida:
Ganaste el 71.42% de los juegos */
import CL_Juego from "./CL_Juego.js"
import CL_Equipo from "./CL_Equipo.js";

let juego1= new CL_Juego(1);
let juego2= new CL_Juego(1);
let juego3= new CL_Juego(0);
let juego4= new CL_Juego(1);
let juego5= new CL_Juego(0);
let juego6= new CL_Juego(1);
let juego7= new CL_Juego(1);

let equipo= new CL_Equipo();

equipo.procesarjuego(juego1);
equipo.procesarjuego(juego2);
equipo.procesarjuego(juego3);
equipo.procesarjuego(juego4);
equipo.procesarjuego(juego5);
equipo.procesarjuego(juego6);
equipo.procesarjuego(juego7);

let salida=document.getElementById("salida");
salida.innerHTML="resuldado"
salida.innerHTML+="<br> El porcentaje de victorias es de: "+equipo.porcentajevictorias();

