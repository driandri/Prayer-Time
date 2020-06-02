import React, { useState, createContext } from "react";

export const OnFocusContext = createContext({ onFocus: true });

export const OnFocusProvider = (props) => {
  let [onFocus, setOnFocus] = useState(false);

  // React.useEffect(() => {
  //   console.log("dicek ", onFocus);
  // });
  const ChangeInputContext = () => {
    setOnFocus(true);
  };
  const MouseOut = () => {
    setOnFocus(false);
  };
  return (
    <OnFocusContext.Provider value={{ onFocus, ChangeInputContext, MouseOut }}>
      {props.children}
    </OnFocusContext.Provider>
  );
};
