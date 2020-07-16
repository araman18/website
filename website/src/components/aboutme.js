import React, { Component } from 'react';
import { ListGroup, Container} from 'react-bootstrap'

class About extends Component {
  render() {
    return(
      <div className = "about-page">
      <h1>About Me</h1>
        <p>My name is Abhijit Raman, I am a junior at the University Of Texas At Austin. I am graduating in 2022 with  B.S in Computer Science and a Minor in Mathematics.
         I am currently seeking a Summer Internship for Summer 2021. I have previously interned at Hewlett Packard during the summer of 2020. I worked on measuring and improving
         ssd performance in HP ChromeBooks using I/O caching and concurrency in C++. My software ended up being deployed to the millions of HP ChromeBooks that are being produced this year.
         I also previously interned at Cognizant during the summer of 2019. I worked on a Machine Learning model to automatically process insurance claims, the model used a modified Support Vector
         Machine and was able to reach an accuracy of 96%, it is being used by the 30 million member Aetna health network and saved them millions of dollars. My interests lie in building impactful
         software solutions to solve fascinating problems since the problem solving aspect of Computer Science is what initially drew me to the field. 
        </p>

        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/1200px-University_of_Texas_at_Austin_seal.svg.png"
          alt="avatar"
          className="avatar-img"
          />

          <img
            src="https://media0.giphy.com/media/2Cce6hv9NcFTW/giphy.gif"
            alt="avatar"
            className="avatar-img"
            />
      </div>
    )
  }
}

export default About;
