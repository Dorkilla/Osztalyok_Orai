export default class Elem{
    #ertek="";
    #szuloElem="";
    #divElem="";
    #id=0;

    constructor(id, ertek, szuloElem){
        this.#id=id;
    this.#ertek=ertek;
    this.#szuloElem=szuloElem;

    this.#megjelenit()

    /*rákattintunk az elemre*/
    this.#divElem=this.#szuloElem.children("div:last-child");
    //console.log(this.#divElem)

    /*egy osztályban a this, egy konkrét objektum példányát jelenti, de egy eseménykezelőben
    function névtelen függvénnyel használva, azt a html elemet jelenti, amelyik az eseményt kiváltotta
    nyílt függvénnyel használva pedig, az objektum példányra mutat*/
    this.#divElem.on("click",()=>{
        if(this.#ertek === " "){
            this.#esemenyTrigger("lepes")
        }
    })
    }
    #megjelenit(){
        let txt=`
        <div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt)
    }
    //információ átadás esemény esetén másik osztálynak
    #esemenyTrigger(esemenyNev){
        /*létrehoz egy saját eseményt
        esemenyNev-encodeURI, és átad adatokat saját magáról{detail: } */
        const e=new CustomEvent(esemenyNev,{detail:this.#id})
        window.dispatchEvent(e)

    }

}