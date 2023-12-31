/* eslint-disable @typescript-eslint/no-var-requires */
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

import "brace";
import "brace/mode/json";
import "brace/theme/github";

import dataSample from "../jsonsample.json";

const Editor = () => {
  const [valueJSON, setvalueJSON] = useState(JSON.stringify(dataSample));

  const handleChange = (input) => {
    setvalueJSON(input);
  };

  const handleBeatify = () => {
    const parsedJson = JSON.parse(valueJSON);
    const formattedJson = stringifyKeys(parsedJson);
    console.log(parsedJson);

      try {
        const parsedJson = JSON.parse(valueJSON);
        const formattedJson = stringifyKeys(parsedJson);

        setvalueJSON(JSON.stringify(formattedJson, null, 2));
      } catch (error) {
        console.error('Invalid JSON format');
      }
    };

  const stringifyKeys = (obj) => {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    if (Array.isArray(obj)) {
      return obj.map((item) => stringifyKeys(item));
    }

    const newObj = {};
    for (const key in obj) {
      let newKey = key;
      if (typeof key !== "string") {
        newKey = String(key);
      }
      newObj[newKey] = stringifyKeys(obj[key]);
    }
    return newObj;
  };

  return (
    <>
      <AceEditor
        mode="json"
        theme="xcode"
        name="editorjson"
        fontSize={12}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          cursorStyle: "smooth",
        }}
        style={{ borderRadius: "8px",width:"840px" }}
        value={valueJSON}
        onChange={handleChange}
        wrapEnabled={false}
      />
      <div onClick={handleBeatify}>Beautify</div>
    </>
  );
};

export default Editor;
