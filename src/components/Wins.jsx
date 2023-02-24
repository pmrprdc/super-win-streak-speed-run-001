import React from "react";


export default function CurrentWins(props){
    
       const {wins} = props;



    return (
        <>
            {wins.map(win=>{
              return  <h1>{win}</h1>
            })}
        </>
    
    )

}