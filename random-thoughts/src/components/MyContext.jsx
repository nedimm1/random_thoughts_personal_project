// src/context/MyContext.jsx
import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [text, setText] = useState("");
  const [thought, setThought] = useState([]);
  const [canShow, sCanShow] = useState(false);

  return (
    <MyContext.Provider
      value={{ text, setText, thought, setThought, canShow, sCanShow }}
    >
      {children}
    </MyContext.Provider>
  );
};

MyProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
