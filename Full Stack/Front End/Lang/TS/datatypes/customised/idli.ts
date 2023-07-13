class Idly{
    size:number
    weight:number
    color:string
    chutney:string
    sambar:string
    constructor(){
        this.color="white"
        this.chutney='tasty'
    }
    withHeadb(){
        console.log('nice')
    }
    withHeada(){
        console.log('mediam')
    }
}
let rachBreakfasts=new Idly()
rachBreakfasts.withHeadb()
rachBreakfasts.withHeada()
console.log(rachBreakfasts)