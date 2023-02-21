import "./codeblock.scss"
import { useContext, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, docco, lightfair, googlecode, a11yLight, a11yDark, dracula, tomorrowNightBlue, tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DarkModeContext } from '../../../context/darkModeContext';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import "prismjs/themes/prism-tomorrow.css";
import "highlight.js/styles/github.css";
import hljs from "highlight.js";



import Highlight from 'react-highlight'


const CodeBlock = ({ children }) => {

  const darkMode = useContext(DarkModeContext)
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  return (
    <div className="code-block">

      <SyntaxHighlighter language="javascript" showLineNumbers="true" wrapLongLines={true} style={docco}>
        {children}
      </SyntaxHighlighter>
      {/* <pre>
        <code className="language-javascript">{children}</code>
      </pre> */}
    </div>
  );
};

export default CodeBlock


