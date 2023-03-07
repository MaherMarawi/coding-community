import "./codeblock.scss"
import { useContext, useEffect, useState, useRef } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DarkModeContext } from "../../../context/darkModeContext";



const CodeBlock = ({ children }) => {

  const darkMode = useContext(DarkModeContext)
  const [color, setColor] = useState()
  const [isCopied, setIsCopied] = useState("copy")

  const handleCopy = () => {
    navigator.clipboard.writeText(children)
    if (navigator.clipboard) setIsCopied("copied")
    setTimeout(() => {
      setIsCopied("copy")
    }, 3000);
  }

  useEffect(() => {
    if (darkMode) setColor("black")
    else setColor("white")
  }, []);
  return (
    <div className="code-block-container">
      <button className="copy-to-clipboard" onClick={() => handleCopy()}>{isCopied}</button>
      <SyntaxHighlighter
        className="code-block"
        language="js"
        style={tomorrowNight}
        wrapLongLines={true}
      >
        {children}
      </SyntaxHighlighter>
    </div>


  )
};

export default CodeBlock


