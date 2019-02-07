import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { UncontrolledCarousel, Card, CardTitle, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


const items = [
  {
    src: 'https://s3.amazonaws.com/eventbrite-s3/marketing/landingpages/home-redesign/bg-desktop-generationdiy.jpg',
    // altText: 'slide 1',
    // caption: 'slide 1',
    // header: 'slide 1 header'
  },
  {
    src: 'https://s3.amazonaws.com/eventbrite-s3/marketing/landingpages/home-redesign/bg-desktop-rapoport.jpg',
    // altText: 'slide 2',
    // caption: 'slide 2',
    // header: 'slide 2 header'
  }
];

const Slider = (props) => {
  return (
    <>
    <div>
      <Jumbotron fluid>
        <Container fluid style={{backgroundImage: url("https://s3.amazonaws.com/eventbrite-s3/marketing/landingpages/home-redesign/bg-desktop-generationdiy.jpg")}}>

          <div>
            <Row style={{marginLeft:"10px", marginRight:"10px"}}>
              <Col sm="4" style={{margin:"0px"}}>
                <Card body style={{backgroundColor:"#000131"}}>
                  <CardTitle style={{color:"white"}}>Looking for</CardTitle>
                  <Form>
                        <FormGroup>
                              <Input type="text" name="event" placeholder="Event" />
                         </FormGroup>
                      </Form>
                </Card>
              </Col>
              <Col sm="4" style={{margin:"0px"}}>
                <Card body style={{backgroundColor:"#000131"}}>
                  <CardTitle style={{color:"white"}}>In</CardTitle>
                  <Form>
                        <FormGroup>
                              <Input type="text" name="city" placeholder="Mumbai" />
                         </FormGroup>
                      </Form>
                </Card>
              </Col>
              <Col sm="4" style={{margin:"0px"}}>
                <Card body style={{backgroundColor:"#000131"}}>
                  <CardTitle style={{color:"white"}}>On</CardTitle>
                  <Form>
                        <FormGroup>
                              <Input type="date" name="date" placeholder="Any date" />
                         </FormGroup>
                      </Form>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>

      </Jumbotron>
    </div>
    </>
  );
};

export default Slider;
