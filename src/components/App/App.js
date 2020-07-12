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

  updateLikes = (id, userLiked, totalLikes) =>{
    console.log('UserLIked status in updatelikes,', userLiked);
    console.log('totalLikes status in totalLikes,', totalLikes);

    let object = {newUserLiked: userLiked, totalLikes: totalLikes};
    console.log('Id in updateLikes',id);
    console.log('sending object', object );
    Axios({
      method: 'PUT',
      url: '/gallery/like/' + id,
      data: {newUserLiked: userLiked, totalLikes: totalLikes}
    }).then((response)=>{
      console.log('Success updating likes');
      this.getImages();
    }).catch((err)=>{
      console.log('Error updating the likes:', err);
      alert(err);
    })
  }
  
  updateFlip = (id, flipStatus) =>{
    console.log('Id in updateFlip',id);
    console.log('flipStatus in updateFlip',flipStatus)
    let object = {newFlipStatus: flipStatus};
    console.log('sending object', object);
    Axios({
      method: 'PUT',
      url: '/flip/' + id,
      data: {newFlipStatus: flipStatus}
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

export default App;
