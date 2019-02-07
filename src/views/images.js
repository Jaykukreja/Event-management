import React, { Component } from 'react';
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

class BackgroundImage extends Component{
	render(){
			return (
				<>
					<UncontrolledCarousel items={items} />
					<div style={{marginTop:'-200px'}}>
						<Row style={{marginLeft:"10px", marginRight:"10px"}}>
							<Col style={{margin:"0px", }}>
								<Card body style={{backgroundColor:"#000131"}}>
									<CardTitle style={{color:"white"}}>Looking for</CardTitle>
									<Form>
        								<FormGroup>
          										<Input type="text" name="event" placeholder="Event" />
       									 </FormGroup>
       								</Form>
								</Card>
							</Col>
							<Col style={{margin:"0px"}}>
								<Card body style={{backgroundColor:"#000131"}}>
									<CardTitle style={{color:"white"}}>In</CardTitle>
									<Form>
        								<FormGroup>
          										<Input type="text" name="city" placeholder="Mumbai" />
       									 </FormGroup>
       								</Form>
								</Card>
							</Col>
							<Col style={{margin:"0px"}}>
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
				</>
				);
		}
} 

export default BackgroundImage;