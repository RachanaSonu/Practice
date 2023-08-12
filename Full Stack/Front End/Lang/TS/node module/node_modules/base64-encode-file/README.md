# base64-encode-file

# Base64
* Intro: So the Base64 is nothing but conversation of images to ASCII code which is 7-bit character set contains 128 characters.
It can convert the data in human readable format it can encode and decode the base64 languages.

# Step to be follow:
* Install base64-encode-file by using following comand
 ```bash
  npm i base64-encode-file
```
* After the Installation check in the package.json file wither it
is installed or not.
 ```bash
 "base64-encode-file": "^1.0.1",
  ```
* Working Example with React.JS is as follows:
 ```bash
 import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import base64 from 'base64-encode-file'

function App() {
let [img,setImg]=useState()
let handleChange=async(e)=>{
  let data=await base64(e.target.files[0])
  console.log(data)
}
  return <>
  <h1>testing the  base64-encode-file</h1>
  <input type="file" name="img" onChange={handleChange}/>
  </>
}

export default App;
```
* Working Example with React.TS is as follows:

```bash
import React from 'react';
import logo from './logo.svg';
import './App.css';
import base64 from 'base64-encode-file'

function App() {
 
  let handleChange=async(e:any)=>{
    console.log( await base64(e.target.files[0]))
 
  }
  return (
    <>
    <input type="file" name="" onChange={handleChange} />
    </>
  );
}

export default App;

```

# Base64 code look like this:

* For Example in HTML Coding: ```bash <img src=”data:image/pig: base64, paste the base64 code” alt=””>```
So the code before pasting the base64 code is: ”data:image/pig: base64, and after that you can
paste the base64 code and save and see the result.

# PDF File For Your Reference

* [Conversion PDF Manual](https://github.com/wa5/base64-encode-file/blob/main/Base64.pdf)

# React.js File For Your Reference

* [React.js Example](https://github.com/wa5/base64-encode-file-react-js-example/tree/main/exmple)

# React.ts File For Your Reference

* [React.ts Example](https://github.com/wa5/base64-encode-file-react-js-example/blob/main/flipkart-react/src/App.tsx)