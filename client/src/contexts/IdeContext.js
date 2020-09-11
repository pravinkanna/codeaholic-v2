import React, { createContext, useState } from 'react';

export const IdeContext = createContext();

export const IdeProvider = ({ children }) => {
    const [languageId, setLanguageId] = useState("50");
    const [fontSize, setFontSize] = useState(16);
    const [code, setCode] = useState("");
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [result, setResult] = useState("");
    const [shareId, setShareId] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [shareModalShow, setShareModalShow] = useState(false);
    const [loginModalShow, setLoginModalShow] = useState(false);
    const [width, setWidth] = useState(window.width);

    return (

        <IdeContext.Provider value={{
            languageId, fontSize, code, input, output, result, shareId, isError, isLoading, shareModalShow, loginModalShow, width,
            setLanguageId, setFontSize, setCode, setInput, setOutput, setResult, setShareId, setIsError, setIsLoading, setShareModalShow, setLoginModalShow, setWidth
        }}>
            {children}
        </IdeContext.Provider>

    )
}

