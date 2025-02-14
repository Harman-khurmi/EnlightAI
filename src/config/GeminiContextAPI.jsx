import { createContext, useState } from "react";
import run from "./gemini";


export const Context = createContext();

const ContextProvider = (props) => {

    const [inputPrompt, setInputPrompt] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("")
    const [resultData, setResultData] = useState("")
    const [prevPrompts, setPrevPrompts] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    // function to render the response word by word
    const delayParagh = (index, nextWord) => {
        setTimeout(() => {
            setResultData(prev => prev + nextWord)
        }, 75 * index)
    }

    const newChat = ()=>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        // to store the prev prompts and send them again to gemini
        // let response;
       
        // // if (prompt !== null) {
        // if (prompt !=undefined) {
        //     response = await run(prompt)
        //     console.log(prompt)
        //     setPrevPrompts(prev => [...prev, prompt])
        //     // response = await run(prompt.split(" "));
        //     setRecentPrompt(prompt)
        // }
        // else {
        //     setPrevPrompts(prev => [...prev, inputPrompt])
        //     setRecentPrompt(inputPrompt)
        //     response = await run(inputPrompt)
        // }
        // end
        setRecentPrompt(inputPrompt)
        setPrevPrompts(prev => [...prev, inputPrompt])
        const response = await run(inputPrompt)
        // logic to remove * and **
        let responseArray = response.split("**");
        let newResponse="";
        for (let i = 0; i < responseArray.length; i++) {
            if (i == 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let delayedResponseArray = newResponse2.split(" ")
        for (let i = 0; i < delayedResponseArray.length; i++) {
            const nextWord = delayedResponseArray[i];
            delayParagh(i, nextWord + " ")
        }

        // setResultData(newResponse2)
        setLoading(false)
        setInputPrompt("")
        // setRecentPrompt(inputPrompt)
    }
    // onSent("what is react js")

    const contextValue = {
        // globar variable
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        inputPrompt,
        setInputPrompt,
        prompt,
        setResultData,
        setShowResult,
        setLoading,
        newChat

    }
    return <Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>
}

export default ContextProvider;
