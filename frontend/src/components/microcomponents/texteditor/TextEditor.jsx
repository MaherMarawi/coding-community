import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const TextEditor = () => {
  const [value, setValue] = useState('');
  const titleRef = useRef()
  console.log(value)

  return <ReactQuill theme="snow" ref={titleRef} />;
}

export default TextEditor