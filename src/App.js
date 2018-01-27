import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Reset.css';
import './App.css';
import Routes from './Routes';
import Header from './components/Header/Header';

class App extends Component {
  constructor(){
    super();
    this.state={
      headerProps:{
        pageTitle:"Shelfie",
        binTitle:"Bin A"
      },
      shelves:[
        {id:0, name: 'Shelf A', bins:[]},
        {id:1, name: 'Shelf B', bins:[]},
        {id:2, name: 'Shelf C', bins:[]},
        {id:3, name: 'Shelf D', bins:[]}
      ]
    }
    this.changeTitle = this.changeTitle.bind(this)
  }
  changeTitle=()=>{
    let copy = Object.assign({}, this.state.headerProps)
    copy.pageTitle = "hello"
    this.setState({headerProps: copy})
  }

  render() {
    const shelves = this.state.shelves.map((shelf, i)=>{
      return (
        <Link key={i} to={`/bins/${shelf.id}'`} style={{ textDecoration: 'none'}}>
        <div  className="Shelf Button">
        <h2>{shelf.name}</h2>
        </div>
        </Link>
      )
    })
    return (
      <div className="App">
        <Header headerProps={this.state.headerProps}/>
        {shelves}
        {Routes}
        <button onClick={this.changeTitle} >Click Me</button>
      </div>
    );
  }
}

export default App;
