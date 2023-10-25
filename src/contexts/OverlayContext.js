import React, { createContext, useContext, useReducer } from "react";

const OverlayContext = createContext();

export const useOverlay = () => {
  return useContext(OverlayContext);
};

const initialState = {
  isOverlayVisible: false,
};

const overlayReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_OVERLAY":
      return { isOverlayVisible: true };
    case "HIDE_OVERLAY":
      return { isOverlayVisible: false };
    default:
      return state;
  }
};

const OverlayProvider = ({ children }) => {
  const [state, dispatch] = useReducer(overlayReducer, initialState);

  const showOverlay = () => {
    dispatch({ type: "SHOW_OVERLAY" });
  };

  const hideOverlay = () => {
    dispatch({ type: "HIDE_OVERLAY" });
  };

  return (
    <OverlayContext.Provider value={{ state, showOverlay, hideOverlay }}>
      {children}
    </OverlayContext.Provider>
  );
};

export default OverlayProvider;
