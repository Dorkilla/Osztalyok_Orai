import Elem from "./Elem.js";
export default class Jatekter{
    #korSzamlalo=0; //páros esetén x jön, páratlan esetén o
    #lista=[" ","X"," "," "," ","O"," "," "," "];

    constructor(){
        this.#megjelenit()

        //feliratkozik a lépés nevű eseményre
        $(window).on("lepes",(event)=>{
            //console.log(event.detail)
            let id = event.detail;
            this.#lep(id);
        })
    }
    #megjelenit(){
        const szuloElem=$(".jatekter");
        szuloElem.empty()
        this.#lista.forEach((ertek, index)=>{
            const elem=new Elem(index,ertek, szuloElem);
        });
    }
    #lep(id){
        if(this.#korSzamlalo % 2 ===0){
            this.#lista[id] = "X"
        }else{
            this.#lista[id] = "O"
        }
        this.#korSzamlalo++;
        this.#megjelenit()
        }
    #ell(){
        //gyözelem ellenőrzése
    }
}