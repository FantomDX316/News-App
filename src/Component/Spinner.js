import React, { Component } from 'react'


export default class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img style={{width:"30%"}} src="/spinnerImage.gif" alt="can't load "></img>
      </div>
    )
  }
}
