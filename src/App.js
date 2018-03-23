import React, { Component } from 'react';
import './App.css';
import './index.js'
import Block from './components/block';
import GitHub from './components/github';
import Furniture from './components/furniture';





class App extends Component {
  constructor(){
    super();

    ///get initial state
    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <Block titleProp="GitHub API" content="Pulling My Github Profile Data Using GitHubs API"/>
        <GitHub username="timblake17"/>
        <Block titleProp="Furniture Filter" content="Filtering Furniture Items by Type Using a Json File That I Built Pulling Data From Wayfairs Website"/>
        <Furniture />
      </div>
    );
  }
}

export default App;
