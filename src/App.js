
import './App.css';
import React, {useState, useMemo, useEffect} from 'react';


function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const result = useMemo(() => {
    return factorial(counter);
   }, [counter]);

  return (
    <div className="App">
        <h1>Factorial of {counter} is {result}</h1>
    
        <button onClick={() => setCounter(counter + 1)}>Increase</button>
        <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    
        <hr></hr>
        <div>
          <span>Name:</span>
          <input type="text"
          placeholder="Name:"
          value={name}
          onChange={(e) => setName(e.target.value)} />
        </div>
        <div>Name is: {name}</div>
        <hr>
        </hr>
        <DisplayName name={name}></DisplayName>
    </div>
  );
};
const DisplayName = React.memo(({ name }) => {
  return <div>
    {name}
  </div>;
});
function factorial(num){
  let i = 0;
  while(i < 20000000){
    i++;
  }
  if(num < 0){
    return -1; 
  }
  if(num === 0){
    return 1;
  }
    return num * factorial(num-1);
 
}

export default App;
