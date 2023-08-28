import { Col, Container, Row } from "react-bootstrap"
import { Mynav } from "../../components/Navbar/Mynav.com"
import { Mycarouses } from "../../components/MyCarouses/Mycarouses.com"

import { getAllcorona } from "../../service/getAllcorona.service"
import { useEffect, useState } from "react"
import { Mycard } from "../../components/Card/Mycard.com"

export let Home:React.FC<{}>=()=>{
   let [proList,setProList]=useState<any>([]);
   useEffect(()=>{
    (async()=>{
        let data=await getAllcorona()
        console.log("=>",data)
        setProList([data])
    })();
   },[])
//    let prolist= proList.map((item:any)=>{return<><Col><Mycard date={item.date} dateymd={0} totalconfirmed={0}></Mycard> </Col></>})

//    useEffect(()=>{
//     prolist=proList?.map((item:any)=>{return<><Col><Mycard date={0} dateymd={"dateymd"} totalconfirmed={item.totalconfirmed}></Mycard> </Col></>})},[proList])
   console.log("proList",proList[0]?.cases_time_series
   )
   return <Container fluid>
    <Row>
        <Col>
        <Mynav/>
        </Col>
    </Row>
<br />
    <Row>
        <Col>
       <Mycarouses/>
        </Col>
    </Row>
    <Row>
        {
            proList[0]?.cases_time_series.map((item:any)=>{return<><Col><Mycard date={item.date} dateymd={0} totalconfirmed={0}></Mycard> </Col></>})
        }
    </Row>
    
<br />
    {/* <Row>
        <Col>
       <Mycard/>
        </Col>
    </Row>
    <Row>
        <Col>
       <Mycard/>
        </Col>
    </Row> */}
    </Container>

}