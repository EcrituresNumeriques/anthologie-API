import React, { Component } from 'react';

export let nl2br = function(string){
    if(!string){return null}
    let random = uuidv4();
    return string.split('\n').map((item,i)=>(<span key={"line-"+random+"-"+i}><br/>{item}</span>))
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
