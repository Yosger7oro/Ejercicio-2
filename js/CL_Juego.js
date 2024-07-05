export default class CL_Juego{
constructor(re){
    this.resultado=re;
}
set resultado(r){
    return this._resuldado=+r;
}

get resultado(){
    return this._resuldado;
}
}