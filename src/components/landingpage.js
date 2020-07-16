import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://geoforward.com/wp-content/uploads/PCB-Contamination-in-Killer-Whale-Orcas.jpg"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Abhijit Raman</h1>

            <hr/>

          <p>Java | Python | C/C++ | NodeJS | ReactJS | TensorFlow | SkLearn | PyTorch</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/araman18/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/araman18" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
          
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
