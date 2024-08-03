import { useContext, useState } from "react";
import { MyContext } from "./MyContext";

function InputText() {
  // Destructure the context values once
  const { text, setText, canShow, sCanShow, thought, setThought } =
    useContext(MyContext);

  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = `posted at: ${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  const [inputValue, setInputValue] = useState("");

  function handleText(e) {
    setInputValue(e.target.value);
  }

  const addThought = (newThought) => {
    setThought((prevState) => [...prevState, newThought]);
  };

  function handleSubmit() {
    const newThought = {
      text: inputValue,
      postedTime: currentTime,
    };
    setText(inputValue);
    setInputValue("");
    addThought(newThought);
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
