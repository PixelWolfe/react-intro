import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Gallery from '../Gallery/Gallery';
import Axios from 'axios';

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
      <div className="App">

        <Header/>

        <br/>

        <Gallery images={this.state.images}/>
 
      </div>
    );
  }
}

export default App;
