import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Personal Website</CardTitle>
            <CardText>
              The website you're on right now, made with ReactJS. Created in order to consolidate my work as a software developer into one medium for anyone who is interested. Check out the code below.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/araman18/Personal-Website">GitHub</Button>
              <Button colored href="https://abhijit-raman.surge.sh">Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://developer.spotify.com/assets/branding-guidelines/icon3@2x.png) center / cover'}} >Spotify Data App</CardTitle>
            <CardText>
A Python Flask powered app that uses the Spotify Web API to display fascinating listening statistics to users in an aesthetically pleasing fashion. Uses machine learning for a personality analysis of the user's music. Try out the website or the look at the code below.            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/araman18/spotify-data-app">GitHub</Button>
              <Button colored href="http://myspotifydata.azurewebsites.net/">Link</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0lq0B9ahMiGYu024LNUivZ9pYLdjBHZjEkA&usqp=CAU) center / cover'}} >Reinforcement Learning in Protein Folding</CardTitle>
            <CardText>
              As part of a research project under Dr Chandrajit Bajaj at UT Austin I worked on a Generative Predictive Model to generate protien molecules with specific chemical traits and physical structure.
This was done using a StackRNN, based off of the GRU type RNN from PyTorch, in order to generate SMILE notation strings as protien data to be processed by the Predictive network.
The predictive network used reinforcement learning in order to modify these incoming SMILE strings to valid molecules that closely resembled the chemical traits desired.
This was very exciting work, if you are interested check it out below.
            </CardText>
            <CardActions border>
              <Button colored href="https://github.com/araman18/Summer-2020-Research">GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000', height: '176px', background: 'url(https://kwhs.wharton.upenn.edu/wp-content/uploads/2013/11/twitter-2.jpg) center / cover'}} >Market Insight Tool</CardTitle>
            <CardText>
              A bot that uses data from the Twitter API to perform a sentiment analysis on a user chosen stock, determining the public perception of the company, combines this information with Black Scholes options
              computations to determine trend. Provides users with potential strategies to take advantage of the trend by buying options, going long/short on the stock itself or capturing a range with an iron condor. 
              Written in Python, plans for integration with Facebook API, and Zipline for backtesting. Uses TextBlob for sentiment analysis.
              
            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://media-exp1.licdn.com/dms/image/C4E1BAQEn2A1bmxY6xA/company-background_10000/0?e=2159024400&v=beta&t=hwfkiJKy9nPasCiSKkgPtLKA1QlCSaNLUnksPLNrnPE) center / cover'}} >Software Engineering Intern</CardTitle>
            <CardText>
              Worked on the creation of an automated claims processing system used by 30 million customers in the Aetna Healthcare network.
                Helped develop a machine learning classification system with SKLearn XGBoost in and achieved a 96% claims processing accuracy.
                Used Django for backend and frontend development of system website and make it as easy to use as possible for consumers.

            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(data:image/png;base64,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) center / cover'}} >Software Engineering Intern</CardTitle>
            <CardText>
               Measured the disk read/write performance of HP Chromebooks to 98% accuracy of producer claimed speeds. 
              Minimized disk caching impact on measuring of read/write speeds to achieve highest possible accuracy.
               Reduced overhead by designing a Thread Manager rather than using the C++ Thread Pool.
               Measured USB transfer performance between internal storage and external USB devices with fragmented files and large sequential files.

            </CardText>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
    } 
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Web Dev</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Work Experience</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
