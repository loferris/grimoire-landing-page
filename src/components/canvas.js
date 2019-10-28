import React, { useState, setState } from "react";
//import { css } from "@emotion/core";
//import styled from "@emotion/styled";
//import jimp from "jimp";
import { Editor, EditorState } from "draft-js";
//import createImagePlugin from "draft-js-image-plugin";

/*const createCanvas = async (imagePath) => {
  const userImage = await jimp.read(imagePath);
  const cardEditor = userImage
    .contain( w, h[, alignBits || mode, mode])
    //.resize(jimp.AUTO, jimp.AUTO)
    .normalize()
    .write('userImage.png')
}*/

function MyEditor() {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  return <Editor editorState={editorState} onChange={setEditorState} />;
}

const Canvas = () => (
  <div>
    <MyEditor />
  </div>
);

export default Canvas;
