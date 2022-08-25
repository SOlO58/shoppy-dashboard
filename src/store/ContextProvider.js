import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initState);
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#7352FF");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);

  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  const clickHandler = (e) => {
    setIsClicked({ ...initState, [e]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        clickHandler,
        screenSize,
        setScreenSize,
        setColor,
        setMode,

        currentColor,
        currentMode,
        setCurrentColor,
        setCurrentMode,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);

// import React, { createContext, useContext, useState } from "react";

// const StateContext = createContext();

// const initState = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
// };

// export const ContextProvider = ({ children }) => {
//   const [activeMenu, setActiveMenu] = useState(true);
//   const [isClicked, setIsClicked] = useState(initState);
//   const [screenSize, setScreenSize] = useState(undefined);
//   const [currentColor, setCurrentColor] = useState("#7352FF");
//   const [currentMode, setCurrentMode] = useState("Light");
//   const [themeSettings, setThemeSettings] = useState(false);

//   const setMode = (e) => {
//     setCurrentMode(e.target.value);
//     localStorage.setItem("themeMode", e.target.value);
//     setThemeSettings(false);
//   };
//   const setColor = (color) => {
//     setCurrentColor(color);
//     localStorage.setItem("colorMode", color);
//   };

//   const clickHandler = (e) => {
//     setIsClicked({ ...initState, [e]: true });
//   };
//   return (
//     <StateContext.Provider
//       value={{
//         activeMenu,
//         setActiveMenu,
//         isClicked,
//         setIsClicked,
//         clickHandler,
//         screenSize,
//         setScreenSize,
//         setColor,
//         setMode,

//         currentColor,
//         currentMode,
//         setCurrentColor,
//         setCurrentMode,
//         themeSettings,
//         setThemeSettings,
//       }}
//     >
//       {children}
//     </StateContext.Provider>
//   );
// };

// export const useStateContext = () => useContext(StateContext);
