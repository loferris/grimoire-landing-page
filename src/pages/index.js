import React, { Component } from "react";
import Layout from "../components/layout";
//import Canvas from "../components/canvas";
//import CustomImageEditor from "../components/CustomImageEditor";
//import Editor from '../components/editor';
import Imgix from "react-imgix";

export default class App extends Component { 
  state = {
    src: 'https://grimoire.imgix.net/lupines-jenner.jpeg?txt=the%20coast&txt-color=white&txt-size=300&txt-align=bottom%2Ccenter&w=600&txt-font=monospace',
    imgixParams: { auto: 'enhance', fit: 'crop' }
  }

  handleClickVibrant = e => {
    this.setState({ imgixParams: { auto: 'enhance', sat: 50, con: 25, fit: 'crop' } })
  }

  handleClickClassic = e => {
      this.setState({ imgixParams: { auto: 'enhance', fit: 'crop', sat: 50, con: 25, monochrome: 484646 } })
    }

  handleClickVintage = e => {
    this.setState({ imgixParams: { auto: 'enhance', fit: 'crop', sat: 50, con: 25, sepia: 70 } })
  }

  handleClickOriginal = e => {
    this.setState({ imgixParams: { auto: 'enhance', fit: 'crop' } })
  }

  render() {
  return (
  <Layout>
    <div>
    <Imgix
      src={this.state.src}
      imgixParams={this.state.imgixParams}
    />
    <button onClick={this.handleClickOriginal}>original</button>
    <button onClick={this.handleClickVibrant}>vibrant</button>
    <button onClick={this.handleClickClassic}>classic</button>
    <button onClick={this.handleClickVintage}>vintage</button>
    </div>
  </Layout>
  )}
};
