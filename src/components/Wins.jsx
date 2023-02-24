import React from "react";


export default function CurrentWins(props){
    
       const {wins} = props;



    return (
        <>
                {wins.map((win, i)=>{

                    return(
                        <>
                        <h1 key={i}>{win}</h1>
                        <button key={[`delete${i}`]}>Delete</button>
                        <button key={[`edit${i}`]}>Edit</button>
                        </>
                    )
                })}
        </>
    
    )

}