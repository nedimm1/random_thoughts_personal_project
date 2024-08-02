import InputText from "../components/InputText";
import { useContext, useState } from "react";
import { MyContext } from "../components/MyContext";

function HomePage() {
  const { canShow, sCanShow } = useContext(MyContext);

  function show() {
    sCanShow(true);
  }
  return (
    <div>
      <h1>Write your Random thought here</h1>
      <button onClick={show}>+</button>
      {canShow && <InputText />}
    </div>
  );
}

export default HomePage;
