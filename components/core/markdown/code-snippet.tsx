import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import sol from 'react-syntax-highlighter/dist/esm/languages/prism/solidity';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
// import rust from 'react-syntax-highlighter/dist/esm/languages/hljs/rust';
import shell from 'react-syntax-highlighter/dist/esm/languages/hljs/shell';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';

// SyntaxHighlighter.registerLanguage('solidity', sol);
// SyntaxHighlighter.registerLanguage('shell', shell);
// SyntaxHighlighter.registerLanguage('javascript', javascript);

interface CodeSnippetProps extends React.HTMLAttributes<HTMLDivElement> {
    language?: string
}

export const CodeSnippet = ({ language = "solidity", children, ...props }: CodeSnippetProps) => {
    return <SyntaxHighlighter style={{ ...theme }} language={language} >
        {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter >
}