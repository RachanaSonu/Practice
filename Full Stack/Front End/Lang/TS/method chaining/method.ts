class rachana{
    eye
    nose
    withEye(){
        console.log('see')
        return this
    }
    withNose(){
        console.log('smell')
        return this
    }
}
let me=new rachana
me.withEye().withNose()