import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';

import 'tachyons';

// import { Data } from './data';
// import Card from './card';
// import DataList from './datalist';

import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <div>     
  //     <Card id= {Data[0].id} name={Data[0].name} email={Data[0].email}/>  
  //     <Card id= {Data[1].id} name={Data[1].name} email={Data[1].email}/>
  //     <Card id= {Data[2].id} name={Data[2].name} email={Data[2].email}/>
  //     <Card id= {Data[3].id} name={Data[3].name} email={Data[3].email}/>
  //   </div>
  // </React.StrictMode>
  
  //OR

  //<React.StrictMode>
  //  <div>
  //    {Data.map((item) => (
  //      <Card key={item.id} id={item.id} name={item.name} email={item.email} />
  //   ))}
  //  </div>
  // </React.StrictMode>

  //OR
  
  //<React.StrictMode>
    // <div>
    //   {(() => {
    //     const cards = [];
    //     for (let i = 0; i < Data.length; i++) {
    //       const item = Data[i];
    //       cards.push(
    //         <Card key={item.id} id={item.id} name={item.name} email={item.email} />
    //       );
    //     }
    //     return cards;
    //   })()}
    // </div>
  //<React.StrictMode>
  
  //OR

  // <DataList Data={Data} />

  //OR

  <App />
  


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
