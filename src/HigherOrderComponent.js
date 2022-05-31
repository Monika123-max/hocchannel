import { useState } from "react";

const Cmp = () => {
  const [data, pushName] = useState([]);
  const [name, setName] = useState("");

  const handleClick = () => {
    console.log();
    pushName([...data, name]);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setName(value);
  };

  return (
    <div className="App">
      {data && data.map((item) => <h1 key={item}>{item}</h1>)}
      <h1>Monika</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
export default Cmp;
