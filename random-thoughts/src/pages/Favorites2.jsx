// Favorites2.jsx
import { useContext } from "react";
import { MyContext } from "../components/MyContext";

function Favorites2() {
  const { thought, setThought } = useContext(MyContext);

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
      <h1>Favorites</h1>
      {thought
        .filter((item) => item.isFavorite)
        .map((item, index) => (
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

export default Favorites2;
