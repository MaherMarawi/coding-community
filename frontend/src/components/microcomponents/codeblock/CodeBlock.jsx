import "./codeblock.scss"
import { useContext } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark, docco, lightfair, googlecode, a11yLight, a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DarkModeContext } from '../../../context/darkModeContext';
import prism from 'react-syntax-highlighter/dist/esm/styles/prism/prism'

const CodeBlock = ({ children }) => {

  const darkMode = useContext(DarkModeContext)

  return (
    <SyntaxHighlighter language="css" className="code-block" showLineNumbers="true" wrapLongLines={true} style={prism}>
      {children}
    </SyntaxHighlighter>
  );
};

export default CodeBlock


