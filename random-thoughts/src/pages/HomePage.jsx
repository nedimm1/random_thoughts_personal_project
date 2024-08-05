import InputText from "../components/InputText";
import { useContext } from "react";
import { MyContext } from "../components/MyContext";

function HomePage() {
  const { canShow, sCanShow, thought, setThought } = useContext(MyContext);

  function show() {
    sCanShow(true);
  }

  function toggleFavorite(index) {
    setThought((prevThought) => {
      return prevThought.map((item, idx) => {
        if (idx === index) {
          return { ...item, isFavorite: !item.isFavorite };
        }
        return item;
      });
    });
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
          <button
            onClick={() => {
              toggleFavorite(index);
              console.log(item.isFavorite);
            }}
          >
            ❤
          </button>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
