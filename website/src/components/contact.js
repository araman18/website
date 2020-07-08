import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { ListGroup, Container} from 'react-bootstrap'
import '../App.css';


class Contact extends Component {
  render() {
    return(
      <Container fluid className="contact-grid">
          <Cell col={6} className="contact-grid">
            <h1>Contact Me</h1>
            <div className="contact-grid">
              <ListGroup variant="flush" className>
                  <ListGroup.Item  style={{fontSize: '30px', fontFamily: 'Sans-Serif'}}>
                    <i className="fa fa-mobile" aria-hidden="true"/> (860) 480 7421
                  </ListGroup.Item>
                  <ListGroup.Item style={{fontSize: '30px', fontFamily: 'Sans-Serif'}}>
                    <i className="fa fa-envelope-o" aria-hidden="true"/> <a href = "mailto: abhijit.raman32@gmail.com">Click Here To Email Me!</a>
                  </ListGroup.Item>
              </ListGroup>
            </div>
          </Cell>
      </Container>
    )
  }
}

export default Contact;
