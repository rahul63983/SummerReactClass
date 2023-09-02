

const MyButton = (props) => {
  return (
    <div>
        {" "}
        <button className="btn btn-outline-danger" onClick={props.onPress}>Click ME</button>
    </div>
  )
}

export default MyButton