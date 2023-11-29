import React from "react";

// import { Data } from "./data";

import Card from '../components/card';

// console.log(Data)
const DataList = ({Data}) =>{
    const dataComponent = Data.map((user, i) => {
        return (
            <Card 
            key={i}
            id = {Data[i].id} 
            name = {Data[i].name} 
            email = {Data[i].email}
            />
        );
    })
    return (
        <div>
            {dataComponent}
        </div>
    )
}

export default DataList