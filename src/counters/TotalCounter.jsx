import React,{useEffect, useState} from 'react'
import Cunter from './Cunter';
import NavBar from './NavBar';

const TotalCounter = () => {
    const[counters,setCounters]=useState(
        [
            {id:1,counts:1},
            {id:2,counts:2},
            {id:3,counts:3},
            {id:4,counts:4},

        ]
    );
    const deleteCounter=(id)=>{
        const lcounter=counters.filter((counter)=>counter.id!==id);
        setCounters(lcounter);

    }
    const findActiveCounter=()=>{
        return counters.filter((counter)=>counter.counts>0).length;//for finding active counter which value is greater than zero
    }
    // useEffect(()=>{

    // },[counters]);
    const decrement=(counter)=>{
        const lcounters=[...counters];//spread opteror(...[])
        const index=lcounters.indexOf(counter);
        if(lcounters[index].counts>0)
        {
            lcounters[index].counts--;
            setCounters(lcounters);

        }
       
        
    }
    const increment =(counter)=>{
        const lcounters=[...counters];//spread opteror(...[])
        const index=lcounters.indexOf(counter);
        lcounters[index].counts++;
        setCounters(lcounters);
      
            };
        const resetAll=()=>{
            setCounters(counters.map((counter)=>{
                counter.counts=0;
                return counter;
            })
            );
        }

  return (
    <div className='mx-3'>
        <NavBar acounter={findActiveCounter()} />
        <button className="btn btn-success" onClick={resetAll}>Reset All</button>
        {counters.map(
            (counter)=>(
                // <Cunter key={counter.id} count={counter.count} onDelete={deleteCounter}/>

                <Cunter key={counter.id} counter={counter} onIncrement={increment} onDecrement={decrement} onDelete={deleteCounter}/>
            )
        )}
    </div>
  );
};

export default TotalCounter