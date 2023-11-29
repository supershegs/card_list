// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { Component } from "react";
import DataList from "../components/datalist";
import SearchBox from '../components/SearchBox';
import Scroll from "../components/Scroll";
// import { Data } from "./data"; from manual input from data list.

// import './App.css';


// const App = () => {
//   return (
//     <div className="tc">
//       <h1> My Awesome Friends </h1>
//       <SearchBox />
//       <DataList Data={Data}/>
//     </div>  
//   );
// }

class App extends Component{
  constructor(){
    super()
    this.state = {
      // Data: Data,  for manual input of data from datalist
      Data: [],
      searchfield: ''
    }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users =>this.setState({Data: users})
      // console.log(users)
    )
    // this.setState({Data: Data})
    
  }
  onSearchChange = (event) =>{
    // console.log(event.target.value)    //your searchbox input
    this.setState({searchfield: event.target.value })
  }
  render(){
    const{Data, searchfield} = this.state;
    const filterFriends = Data.filter(Data =>{
      return Data.name.toLowerCase().includes(searchfield.toLowerCase());
    //console.log('Homemade',filterFriends)  //your searchboxinput and Data.name
    });
    return !Data.length ?
      <h1>Loading!</h1> :
      (
        <div className="tc">
          <h1 className="f2"> My Awesome Friends </h1>
          <SearchBox searchChange={this.onSearchChange}/>
          {/* <DataList Data={Data}/> */}
          <Scroll>
            <DataList Data={filterFriends}/>
          </Scroll>
        </div>
      );   
  }

  //or

  // render(){
  //   const{Data, searchfield} = this.state
  //   const filterFriends = this.state.Data.filter(Data =>{
  //     return Data.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  //   //console.log('Homemade',filterFriends)  //your searchboxinput and Data.name
  //   });
  //   if (this.state.Data.length === 0){
  //     return <h1>Loading!</h1>
  //   } else{
  //     return (
  //       <div className="tc">
  //         <h1 className="f2"> My Awesome Friends </h1>
  //         <SearchBox searchChange={this.onSearchChange}/>
  //         {/* <DataList Data={Data}/> */}
  //         <Scroll>
  //           <DataList Data={filterFriends}/>
  //         </Scroll>
  //       </div>
  //     ); 
  //   }
    
  // }
}

export default App;
