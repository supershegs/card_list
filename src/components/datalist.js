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
    if(!true){
        throw new Error('Error is found!, no data found');
    }
    return (
        <div>
            {dataComponent}
        </div>
    )
}

export default DataList