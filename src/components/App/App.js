import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import Axios from 'axios';

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
    console.log('In getImages');
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

  updateLikes = (id) =>{
    console.log('Id in updateLikes',id);
    Axios({
      method: 'PUT',
      url: '/gallery/like/' + id,
    }).then((response)=>{
      console.log('Success updating likes');
      this.getImages();
    }).catch((err)=>{
      console.log('Error updating the likes:', err);
      alert(err);
    })
  }
  
  updateFlip = (id) =>{
    console.log('Id in updateFlip',id);
    Axios({
      method: 'PUT',
      url: '/flip/' + id,
    }).then((response)=>{
      console.log('Success updating flip');
      this.getImages();
    }).catch((err)=>{
      console.log('Error updating the likes:', err);
      alert(err);
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
          <Grid item xs={1} sm={1}/>
          <Grid item xs={10} sm={10}>
            <p>Photo Reel</p>
            <Gallery images={this.state.images} updateLikes={this.updateLikes} updateFlip={this.updateFlip}/>
          </Grid>
          <Grid item xs={1} sm={1}/>
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
