

const Message = (props) => {
    const {lang,lab}=props.info;//destructring props :=<h2>We are reading {props.info.lang} in {props.info.lab}</h2> 
 //if we want few values from object only then write only that namr in const{lang}
    return (
    <div>
       <h2>We are reading {lang} in {lab}</h2> 
        </div>
  );
};

export default Message