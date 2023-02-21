import "./codeblock.scss"
import { useContext, useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight, docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DarkModeContext } from "../../../context/darkModeContext";



const CodeBlock = ({ children }) => {

  const darkMode = useContext(DarkModeContext)
  const [color, setColor] = useState()
  useEffect(() => {
    if (darkMode) setColor("black")
    else setColor("white")
  }, []);
  return (
    <div className="code-block-container">
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


