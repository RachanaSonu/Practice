class Idly1{
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
let rachBreakfasts1=new Idly1()
rachBreakfasts1.withHeadb()
rachBreakfasts1.withHeada()
console.log(rachBreakfasts1)