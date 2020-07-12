import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import Axios from 'axios';
import flexbox from '@material-ui/system';

import {Grid} from '@material-ui/core';

class App extends Component {

  state = {
    images: []
  }

  componentDidMount(){
    console.log('Dom Loaded, grabbing images!');
    this.getImages();
  }

  getImages = ()=>{
   Axios({
    method: 'GET',
    url: '/gallery'
  }).then(response=>{
    console.log("Response from server: ", response);
    this.setState({
      images: response.data
    })
  }).catch(error=>{
    console.log('Error getting images: ', error);
    alert('Something went wrong!')
  })
  }
  
  
  render() {
    return (
      <>
      <Grid container direction="column">
        <Grid item>
          <Header/>
        </Grid>
        <Grid item container >
          <Grid item xs={false} sm={2}/>
          <Grid item xs={12} sm={8}>



            <Gallery images={this.state.images}/>







          </Grid>
          <Grid item xs={false} sm={2}/>
        </Grid>
      </Grid>
      </>
    );
  }
}

      // <div className="App">

      //   <Header/>

      //   <br/>

      //   <Gallery display="flex" flexDirection="column" images={this.state.images}/>
 
      // </div>

export default App;
