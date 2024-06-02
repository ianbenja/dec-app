import { createContext, useState } from "react";

export const ActiveItemContext = createContext();

export const ActiveItemProvider = ({ children }) => {
  const [activeItem, setActiveItem] = useState(window.location.hash || "#");

  return (
    <ActiveItemContext.Provider value={{ activeItem, setActiveItem }}>
      {children}
    </ActiveItemContext.Provider>
  );
};

import PropTypes from "prop-types";

ActiveItemProvider.propTypes = {
  children: PropTypes.node,
};
