import Cmp from "./HigherOrderComponent";
import "./styles.css";

export default function App() {
  const Channel1 = () => {
    return (
      <div style={{ backgroundColor: "red" }}>
        <Cmp />
      </div>
    );
  };

  const Channel2 = () => {
    return (
      <div style={{ backgroundColor: "green" }}>
        <Cmp />
      </div>
    );
  };

  return (
    <>
      <Channel1 />
      <Channel2 />
    </>
  );
}
