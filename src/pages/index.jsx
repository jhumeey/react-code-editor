import * as React from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";

const Converter = () => {
  const [code, setCode] = React.useState(
    `import * as React from 'react';

    type Props = {
      title: string;
      color: string;
      className: string;
      onClick: () => void;
    };
    
    export const Button: React.FC<Props> = (props) => {
      const { title, color, onClick, ...otherProps } = props;
    
      return (
        <button style={{ color }} onClick={onClick} {...otherProps}>
          {title}
        </button>
      );
    };`
  );

  const [json, setJSON] = React.useState(`//converted code here`);

  function convertJSXToJSON(jsxCode) {
    const importRegex = /import[^;]+['"][^'"]+['"]/g;
    const propsRegex = /type[^{]+{\s*([^}]*)}/s;
    const defaultPropsRegex = /export\s+const\s+defaultProps\s+=\s+{([^}]+)}/;
    const componentRegex =
      /export\s+(?:default\s+)?(?:function|let|const)\s+(\w+)/;
    const contentRegex = /return\s*\(\s*([^)]+)\s*\)?/;

    const json = {
      componentName: "",
      props: [],
      propsDefaults: [],
      imports: [],
      content: "",
    };

    // Extract imports
    const importMatches = jsxCode.match(importRegex);
    if (importMatches) {
      json.imports = importMatches;
    }

    // Extract props
    const propsMatch = jsxCode.match(propsRegex);
    if (propsMatch) {
      const propsString = propsMatch[1].trim();
      const propsArray = propsString.split("\n").map((prop) => prop.trim());
      propsArray.forEach((prop) => {
        const [key, value] = prop.split(":").map((item) => item.trim());
        json.props.push({ key, value });
      });
    }

    // Extract defaultProps
    const defaultPropsMatch = jsxCode.match(defaultPropsRegex);
    if (defaultPropsMatch) {
      const defaultPropsString = defaultPropsMatch[1].trim();
      const defaultPropsArray = defaultPropsString
        .split(",")
        .map((defaultProp) => defaultProp.trim());
      defaultPropsArray.forEach((defaultProp) => {
        const [key, value] = defaultProp.split(":").map((item) => item.trim());
        json.propsDefaults.push({ key, value });
      });
    }

    // Extract component name
    const componentMatch = jsxCode.match(componentRegex);
    if (componentMatch) {
      json.componentName = componentMatch[1];
    }

    // Extract content
    const contentMatch = jsxCode.match(contentRegex);
    if (contentMatch) {
      json.content = contentMatch[1].trim();
    }
    setJSON(JSON.stringify(json, null, 2));

    return JSON.stringify(json, null, 2);
  }

  
  return (
    <div className="flex flex-col gap-48 min-h-screen bg-black text-white">
      <div className="flex ">
        <div className="w-1/2">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
            }}
          />

          <button onClick={() =>convertJSXToJSON(code)}>Convert</button>
        </div>
        <div className="w-1/2">
          <Editor
            value={json}
            onValueChange={(json) => setJSON(json)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="w-1/2">
          <Editor
            value={json}
            onValueChange={(json) => setJSON(json)}
            highlight={(code) => highlight(code, languages.javascript)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>

        <div className="w-1/2">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) => highlight(code, languages.javascript)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 14,
            }}
          />

          <button onClick={() => convertJSXToJSON(code)}>Convert</button>
        </div>
      </div>
    </div>
  );
};

export default Converter;
