import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../static/images/1.jpg'
import img2 from '../../static/images/2.jpg'
import img3 from '../../static/images/3.jpg'

export const Mycarouses:React.FC<{}>=()=> {
  return (
    <Carousel>
      <Carousel.Item>
        <img  height={"300px"} width='100%' src={img1}  />
        <Carousel.Caption>
          <h3>Travel The World</h3>
          <p>Planning to travel world.Call us now.Booking Open just for Rs.56,00,000 <br />365 Days/364 Nights</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img height={"300px"} width='100%' src={img2}  />
        <Carousel.Caption>
          <h3>Island Calling</h3>
          <p>Planning to get tan.Here is for you.Just for Rs.13,00,000 <br />21 Days/20 Nights</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <img height={"300px"} width='100%' src={img3}  />
        <Carousel.Caption>
          <h3>Hot Ballons In Turkey</h3>
          <p>
           Hot Ballons are hotter than you think.Want to experience call us for booking.For Rs.25,00,000 <br />45 Days/44 Nights
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

