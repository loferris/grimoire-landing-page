import React from "react";
import Layout from "../components/layout";
//import Canvas from "../components/canvas";
//import CustomImageEditor from "../components/CustomImageEditor";
//import Editor from '../components/editor';
import Imgix from "react-imgix";

export default () => (
  <Layout>
    <div>
    <Imgix
      src='https://grimoire.imgix.net/lupines-jenner.jpeg?txt=the%20coast&txt-color=white&txt-size=300&txt-align=bottom%2Ccenter&w=600&txt-font=monospace'
      imgixParams={{ auto: 'enhance', sat: 50, con: 25, fit: 'crop' }}
    />
    <Imgix
      src='https://grimoire.imgix.net/lupines-jenner.jpeg?txt=the%20coast&txt-color=white&txt-size=300&txt-align=bottom%2Ccenter&w=600&txt-font=monospace'
      imgixParams={{ auto: 'enhance', fit: 'crop', sat: 50, con: 25, monochrome: 484646 }}
    />
    <Imgix
          src='https://grimoire.imgix.net/lupines-jenner.jpeg?txt=the%20coast&txt-color=white&txt-size=300&txt-align=bottom%2Ccenter&w=600&txt-font=monospace'
          imgixParams={{ auto: 'enhance', fit: 'crop', sat: 50, con: 25, sepia: 70 }}
        />
    <Imgix
        src='https://grimoire.imgix.net/lupines-jenner.jpeg?txt=the%20coast&txt-color=white&txt-size=300&txt-align=bottom%2Ccenter&w=600&txt-font=monospace'
        imgixParams={{ auto: 'enhance', fit: 'crop' }}
      />
    <button>original</button>
    <button>vibrant</button>
    <button>classic</button>
    <button>vintage</button>
    </div>
  </Layout>
);
