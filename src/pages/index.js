import React, { Component } from "react";
import Layout from "../components/layout";
//import Canvas from "../components/canvas";
//import CustomImageEditor from "../components/CustomImageEditor";
//import Editor from '../components/editor';
import Imgix from "react-imgix";

export default class App extends Component { 
  state = {
    src: 'https://grimoire.imgix.net/lupines-jenner.jpeg?txt=the%20coast&txt-color=white&txt-size=300&txt-align=bottom%2Ccenter&w=600&txt-font=monospace',
    vibrant: { auto: 'enhance', sat: 50, con: 25, fit: 'crop' }, 
    classic: { auto: 'enhance', fit: 'crop', sat: 50, con: 25, monochrome: 484646 },
    vintage: { auto: 'enhance', fit: 'crop', sat: 50, con: 25, sepia: 70 },
    original: { auto: 'enhance', fit: 'crop' },
    imgixParams: { auto: 'enhance', fit: 'crop' }
  }

  handleClickVibrant = e => {
    this.setState({ imgixParams: this.state.vibrant })
  }
  render() {
  return (
  <Layout>
    <div>
    <Imgix
      src={this.state.src}
      imgixParams={this.state.vibrant}
    />
    <Imgix
      src={this.state.src}
      imgixParams={this.state.classic}
    />
    <Imgix
          src={this.state.src}
          imgixParams={this.state.vintage}
        />
    <Imgix
        src={this.state.src}
        imgixParams={this.state.original}
      />
    <button>original</button>
    <button>vibrant</button>
    <button>classic</button>
    <button>vintage</button>
    </div>
  </Layout>
  )}
};
