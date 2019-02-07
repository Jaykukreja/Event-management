import React, { Component } from 'react';
import { Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row } from 'reactstrap';

class Cards extends Component{
  render(){
      return (
      <div>
      <Row style={{margin: "10px", marginTop:"20px"}}>
        <Col sm="4">
          <Card>
            <CardImg top src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F52653964%2F59830279653%2F1%2Foriginal.jpg?w=800&auto=compress&rect=0%2C84%2C500%2C250&s=687f4326936569859589dcb6b2ac0c78" alt="Card image cap" />
            <CardBody>
              <CardTitle style={{fontSize:"25px", fontWeight: "bold"}}>Global Azure Bootcamp 2019</CardTitle>
              <CardSubtitle>Sat, Apr 27, 9:00am</CardSubtitle>
              <CardText>Mumbai, Andheri</CardText>
              <CardText>Free</CardText>
              <Button>Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53865439%2F258387435072%2F1%2Foriginal.20181212-125257?w=800&auto=compress&rect=0%2C24%2C1250%2C625&s=473d103b4c4f54ee2ba7f10faff2d3f5" alt="Card image cap" />
            <CardBody>
              <CardTitle style={{fontSize:"25px", fontWeight: "bold"}}>2nd Annual High-Rise India Summit & Awards</CardTitle>
              <CardSubtitle>Tue, Mar 12, 9:30am</CardSubtitle>
              <CardText>Sahar Road, Mumbai, MH 400059</CardText>
              <CardText>Free</CardText>
              <Button>Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F53952964%2F25450091253%2F1%2Foriginal.20181214-071706?w=800&auto=compress&rect=0%2C60%2C1920%2C960&s=980b4d9e2e48d5da69730543a69aeea8" alt="Card image cap" />
            <CardBody>
              <CardTitle style={{fontSize:"25px", fontWeight: "bold"}}>Top Masters Event in Mumbai</CardTitle>
              <CardSubtitle>Sun, Feb 17, 11:30am</CardSubtitle>
              <CardText>462 Tulsi Pipe Road, Mumbai, MH 400013</CardText>
              <CardText>Free</CardText>
              <Button>Book</Button>
            </CardBody>
          </Card>
        </Col>
        </Row>

        <Row style={{margin: "10px", marginTop:"20px"}}>
        <Col sm="4">
          <Card>
            <CardImg top src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F54082514%2F204265366136%2F1%2Foriginal.20181218-101240?w=800&auto=compress&rect=0%2C40%2C1330%2C665&s=e4b012ed632e842d6769466a352b77f0" alt="Card image cap" />
            <CardBody>
              <CardTitle style={{fontSize:"25px", fontWeight: "bold"}}>UGAM 2019 - Sitar Maestro Ustad Shahid Pervez Khan</CardTitle>
              <CardSubtitle>Tue, Feb 5, 7:00am</CardSubtitle>
              <CardText>252 SVS Road, Mumbai, MH 400028</CardText>
              <CardText>Free</CardText>
              <Button>Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F54711140%2F222538864447%2F1%2Foriginal.20190107-094102?w=800&auto=compress&rect=0%2C517%2C750%2C375&s=c06313d437ba9849dbdde3794988fc3e" alt="Card image cap" />
            <CardBody>
              <CardTitle style={{fontSize:"25px", fontWeight: "bold"}}>Art of Concentration (Talk)</CardTitle>
              <CardSubtitle>Sat, Feb 2, 6:00am</CardSubtitle>
              <CardText>Parvati Nivas, 1st floor, khan-Danda Road, 19th A Road, Anand Vihar Society, Ambedkar Colony Khar (W), Mumbai, Maharastra 400052</CardText>
              <CardText>Free</CardText>
              <Button>Book</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardImg top src="https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F55821533%2F284806635936%2F1%2Foriginal.20190128-125620?w=800&auto=compress&rect=0%2C0%2C2160%2C1080&s=4a91d9709266ce085427685aa2e89dd3" alt="Card image cap" />
            <CardBody>
              <CardTitle style={{fontSize:"25px", fontWeight: "bold"}}>IndiGo Airline Pilot Seminar, Mumbai</CardTitle>
              <CardSubtitle>Sun, Mar 3, 3:00am</CardSubtitle>
              <CardText>Sahar Road Andheri East, Mumbai, Maharastra 400059</CardText>
              <CardText>Free</CardText>
              <Button>Book</Button>
            </CardBody>
          </Card>
        </Col>
        </Row>
        <div>
          <h3 style={{fontWeight:'bold', textAlign:'center'}}>See more events</h3>
          <br/>
        </div>
      </div>
  );
  }
}

export default Cards;
