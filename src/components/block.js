import React, { Component } from 'react';
import App from '../App.js';



class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

   render() {
      return (
         <div className="block-container">
            <h2>{this.props.titleProp}</h2>
            <p>{this.props.content}</p>
         </div>
      );
   }
}

export default Header;
