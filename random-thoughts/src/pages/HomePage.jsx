import InputText from "../components/InputText";
import { useContext, useState } from "react";
import { MyContext } from "../components/MyContext";

function HomePage() {
  const { canShow, sCanShow } = useContext(MyContext);
  const { thought, setThought } = useContext(MyContext);

  function show() {
    sCanShow(true);
  }

  return (
    <div>
      <h1>Write your Random thought here</h1>
      <button onClick={show}>+</button>
      {canShow && <InputText />}
      {thought.map((item, index) => (
        <div key={index}>
          <p>{item.text}</p>
          <small>{item.postedTime}</small>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
