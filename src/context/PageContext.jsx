import { createContext, useContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = ({ children }) => {

    const [selectedColor, setSelectedColor] = useState("Blue");

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