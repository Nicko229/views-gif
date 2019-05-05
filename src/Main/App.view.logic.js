import App from './App.view.js'
import React, { Component } from 'react';
import axios from 'axios';

export default class AppLogic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: [],
      text: ''
    }
  }

  // make get request to api
  handleClick = () => {
    const url = `http://api.giphy.com/v1/gifs/search?q=funny+${this.state.text}&api_key=mvLCKvNNtdomExICcEBuKI4hH8xj45Pw`
    axios.get(url)
      .then(res => {
        this.setState({
          image: res.data.data[0].images.original.url
        })
        console.log("image: ", this.state.image)
      })
      .catch(error => {
        console.log(error)
      })
    console.log("handleClick: ", this.state.text)
  }

  // change state onClick
  handleClick = (e) => {
    this.setState({ text: e.target.value })
  }

  render() {
    return (<App
      {...this.state}
      viewState={this.handleSubmit}

    // {...props} 
    // from={this.state.image}
    />)
  }
}