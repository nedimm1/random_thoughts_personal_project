import { useContext, useState } from "react";
import { MyContext } from "./MyContext";

function InputText() {
  const { text, setText } = useContext(MyContext);

  const { canShow, sCanShow } = useContext(MyContext);

  const [inputValue, setInputValue] = useState("");

  function handleText(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit() {
    setText(inputValue);
    setInputValue("");
    sCanShow(false);
  }

  return (
    <div>
      <input value={inputValue} onChange={handleText} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default InputText;
