export default class CL_Equipo{
    constructor(){
        this.contjuegos=0;
        this.contvictorias=0;
    }
    procesarjuego(j){
        this.contjuegos++
        if(j.resultado===1){
            this.contvictorias++
        }
    }

    porcentajevictorias(){
        return (this.contvictorias/this.contjuegos)*100
    }

}
