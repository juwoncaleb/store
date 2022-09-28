import React,{useState}from 'react'

export default function array() {
    const [theValue, setTheValue] = useState("test");
    const [theArray, setTheArray] = useState([1, "stan"]);
    const [theObject, setTheObject] = useState({
      food: "gyoza"
    });
    const [theArrayOfObjects, setTheArrayOfObjects] = useState([
      { color: "blue" }
    ]);
  
    const [theObjectOfArrays, setTheObjectOfArrays] = useState({
      power: ["Lightning", "God strength"]
    });

    // functions to handle the state
    
  const handleChangeValue = event => {
    setTheValue(event.target.value);
  };

  const handleChangeArray = event => {
    event.persist();
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChangeArray: ", event.target.name, event.target.value);
    console.log("handleChangeArray name: ", name);
    setTheArray(prev => [...prev, value]);
  };

  const handleChangeUpdateAddObject = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChangeObject: ", name, value);

    setTheObject(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleChangeArrayAddObject = event => {
    const name = event.target.name;
    const value = event.target.value;
    console.log("handleChangeAddAddObject: ", name, value);

    setTheArrayOfObjects(prevState => [...prevState, { [name]: value }]);
  };

  const handleChangeObjectAddArray = (event, index) => {
    const name = event.target.name;
    const value = event.target.value;
    let specificArrayInObject = theObjectOfArrays.power.slice();
    specificArrayInObject.push(value);
    const newObj = { ...theObjectOfArrays, [name]: specificArrayInObject };
    setTheObjectOfArrays(newObj);
  };
  return (
    <div>

    </div>
  )
}
