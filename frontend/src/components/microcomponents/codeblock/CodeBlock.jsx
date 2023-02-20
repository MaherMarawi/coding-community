import "./codeblock.scss"
import { useContext, useEffect } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, docco, lightfair, googlecode, a11yLight, a11yDark, dracula, tomorrowNightBlue, tomorrowNight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DarkModeContext } from '../../../context/darkModeContext';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'
import "prismjs/themes/prism-tomorrow.css";
const CodeBlock = ({ children }) => {

  const darkMode = useContext(DarkModeContext)

  return (
    <SyntaxHighlighter language="javascript" className="code-block" showLineNumbers="true" wrapLongLines={true} style={prism}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock


