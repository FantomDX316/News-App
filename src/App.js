import React, { Component } from 'react'
import Navbar from './Component/Navbar'
import News from './Component/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor(){
    super();
    this.state={
      progress:0
    }
    this.setProgress = this.setProgress.bind(this)
  }
  setProgress(progress){
    this.setState({
      progress:progress
    })
  }
  render() {
    return (
      <div>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
        />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} docTitle="General - Saiyan News" key="general" pageSize={9} category="general" />} />
            <Route exact path="Business" element={<News setProgress={this.setProgress} docTitle="Business - Saiyan News" key="business" pageSize={9} category="business" />} />
            <Route exact path="/Entertainment" element={<News setProgress={this.setProgress} docTitle="Entertainment - Saiyan News" key="entertainment" pageSize={9} category="entertainment" />} />
            <Route exact path="/Health" element={<News setProgress={this.setProgress} docTitle="Health - Saiyan News" key="health" pageSize={9} category="health" />} />
            <Route exact path="/Science" element={<News setProgress={this.setProgress} docTitle="Science - Saiyan News" key="science" pageSize={9} category="science" />} />
          </Routes>
        </BrowserRouter>
        
      </div>
    )
  }
}

