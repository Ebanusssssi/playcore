import { createContext, useEffect, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);  
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
    setSelectedColor,

    isOpen,
    setIsOpen,
  }

  return (
      <PageContext.Provider value={value}>
          {children}
      </PageContext.Provider>
  )

}

export default PageContextProvider;