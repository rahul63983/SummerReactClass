import React from 'react'

function Hello() {
  return (    //1:-only single root tag with return statement , it can't accept 2 tag
    <div>
        <h1>Hello by React JS</h1>
        <h2>This is JSX</h2>
    </div>
  );
  //() this is used to return multiple lines , all the content return which is write in the paratheies
}
//we can create mutliple component but recommended is only 1 components in a file 
//import React from 'react'//we have to remove this line when we create multiple components
//only 1 defult componet is return only 
//this is arrow component only syntax difference 
const Hello2 = () => {
  return (
    <div>Hello2</div>
  );
};

export { Hello2};
export default Hello