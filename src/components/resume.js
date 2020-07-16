import React, { Component, useState } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { Button } from 'react-bootstrap';


class Resume extends Component {

  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
            </div>
            <h2 style={{paddingTop: '2em'}}>Abhijit Raman</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3908 Logan Ridge Drive, 78613</p>
            <h5>Phone</h5>
            <p>(860) 480-7421</p>
            <h5>Email</h5>
            <a href="mailto:abhijit.raman32@gmail.com">abhijit.raman32@gmail.com</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
             <iframe src="https://drive.google.com/file/d/1u09TwvwbUC5x54GFZEtJ3HTZNrwUvddo/preview" width="640" height="480"></iframe>
             <br></br>
             <Button variant="primary" href="https://drive.google.com/file/d/1-hpoRfxheofvMIubSBXic3RT75ow93Aw/view?usp=sharing" target ="_blank">Download My Resume</Button>{' '}
          </Cell>
         
        </Grid>
      </div>
    )
  }
}

export default Resume;
