
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import img4 from '../../static/images/4.jpg'
// import img5 from '../../static/images/5.jpg'
// import img6 from '../../static/images/6.jpg'

// export const Mycard:React.FC<{}>=()=>{
//   return (
//     <CardGroup>
//       <Card>
//         <Card.Img variant="top" height='50%' src={img4} />
//         <Card.Body>
//           <Card.Title>Italy Tour</Card.Title>
//           <Card.Text>
//           Tour Swiss, Paris, Italy and all of Europe with Europe summer 2023 packages. Best Deals Guaranteed. Grab Lowest Prices. Book Customizable Package.<br /> 
//           <h5>13N/14D</h5>
//           <h2>Rs.15,50,000/-</h2>
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 3 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" height='50%' src={img5} />
//         <Card.Body>
//           <Card.Title>Mesmerising Seoul Trip</Card.Title>
//           <Card.Text>
//           Plan your Seoul trip and choose customized cheap Seoul holiday packages. Book Now! ... Mesmerising Seoul Trip Package. <br /> 
//           <h5>3N/4D</h5>
//           <h2>Rs.1,50,000/-</h2>
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 5 mins ago</small>
//         </Card.Footer>
//       </Card>
//       <Card>
//         <Card.Img variant="top" height='50%' src={img6} />
//         <Card.Body>
//           <Card.Title> The Great India</Card.Title>
//           <Card.Text>
//           With the right all India tour packages, you can discover lush green valleys, snow-covered peaks and gorgeous wildlife. Your trip packages must include the all.<br /> 
//           <h5>23N/24D</h5>
//           <h2>Rs.21,50,000/-</h2>
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer>
//           <small className="text-muted">Last updated 1 mins ago</small>
//         </Card.Footer>
//       </Card>
//     </CardGroup>
//   );
// }


import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

interface IMycard{
    date: number
	dateymd:string|number
	totalconfirmed: number
}

export const Mycard:React.FC<IMycard>=({date,dateymd,totalconfirmed})=>{
  return (
    <Card style={{ width: '18rem' }}>
    <ListGroup variant="flush">
      <ListGroup.Item>{date}</ListGroup.Item>
      <ListGroup.Item>{dateymd}</ListGroup.Item>
      <ListGroup.Item>{totalconfirmed}</ListGroup.Item>
    </ListGroup>
  </Card>
   );

{/* <Card style={{ width: '18rem' }}>
<Card.Text>
    date:{date}
  </Card.Text>
<Card.Body>
  <Card.Title>{dateymd}</Card.Title>
  <Card.Text>
    totalconfirmed:{totalconfirmed}
  </Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card> */}
 
}


