
import MyButton from './MyButton';

const Event = () => {
    const displayMsg=(msg)=>{
        alert(msg);
    }
  return (
    <div>
        <h2>Event Handling Example</h2>
        <MyButton onPress={displayMsg}/>
    </div>
  )
}

export default Event;