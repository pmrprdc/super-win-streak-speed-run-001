import React from "react";


export default function CurrentWins(props){
    
       const {wins} = props;



    return (
        <>
            {wins.map((win, index)=>{
              return  <h1 key={index}>{win}</h1>
            })}
        </>
    
    )

}