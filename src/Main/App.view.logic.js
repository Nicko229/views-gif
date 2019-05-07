import App from './App.view.js'
import React, { Component } from 'react';
import axios from 'axios';

export default class AppLogic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: [],
      value: ''
    }
  }

  // make get request to api
  onClick = () => {
    const url = `http://api.giphy.com/v1/gifs/search?q=funny+${this.state.value}&api_key=mvLCKvNNtdomExICcEBuKI4hH8xj45Pw`
    axios.get(url)
      .then(res => {
        this.setState({
          image: res.data.data[0].images.original.url

        })
        console.log("onClick image: ", this.state.image)
      })
      .catch(error => {
        console.log(error)
      })
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value
    })
    console.log("onChange value: ", this.state.value)
  }

  render() {

    return (<App
      {...this.props}
      onClick={this.onClick}
      onChange={this.onChange}
      value={this.state.value}
      // onClick={event => this.setState({ text: event.target.value })}
      animalGif={this.state.image}
    />)
  }
}
