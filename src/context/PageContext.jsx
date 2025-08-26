import { createContext, useContext, useEffect, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = ({ children }) => {

    const [selectedColor, setSelectedColor] = useState(() => {
    return localStorage.getItem("selectedColor") || "Blue";
  });

  useEffect(() => {
    if (selectedColor) {
      localStorage.setItem("selectedColor", selectedColor);
      console.log(selectedColor);
      
    }
  }, [selectedColor]);

    const value = {
        selectedColor,
        setSelectedColor

    }

    return (
        <PageContext.Provider value={value}>
            {children}
        </PageContext.Provider>
    )

}

export default PageContextProvider;