export let getAllcorona=async()=>{

    let data=await fetch('https://data.covid19india.org/data.json')
    data=await(await data).json()
    console.log("data",data)
    return data
}