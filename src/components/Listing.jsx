import React from 'react'
// how to listing in jsx 
const Listing = () => {
    let Langs=["Dot.Net","React","Next JS","Java","Python"];
    //there are 3 method for using map()
    //when we arrow function"()=>{}" ther must be return line must, with map (),
    //mostly array conatian an object {it contain many values}at an indiviusal index
    let LangObj=[
        {id:'1',lang:"Dot.Net"},
        {id:'2',lang:"React JS"},
        {id:'3',lang:"Next JS"},
        {id:'4',lang:"Java"},
        {id:'5',lang:"Python"},
    ];
  return (
    <div>
        <h2>List of langauges:</h2>
        <ul>
            {Langs.map((lang,index)=>(
                <li style={{textAlign:"left"}}key={index}>{index} {lang}</li>
            )
//to show index :- <li key={index}>{index}{lang}</li>
            )}
        </ul>
        <h2>List of Array Objects:</h2>
        <ul>
            {LangObj.map((obj)=>(
                <li style={{textAlign:"left"}} key={obj.id}>{obj.lang}</li>
            ))}
        </ul>
        </div>
  )
}

export default Listing