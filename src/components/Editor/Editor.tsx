/* eslint-disable @typescript-eslint/no-var-requires */
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import { useState } from "react";

import "brace";
import "brace/mode/json";
import "brace/theme/github";

import dataSample from "../../jsonsample.json";
import styles from "./style.module.css";

const Editor = () => {
  const [valueJSON, setvalueJSON] = useState(
    JSON.stringify(dataSample, null, 2)
  );
  const [error, setError] = useState(false);

  const handleChange = (input: string) => {
    setvalueJSON(input);
  };

  const handleBeatify = () => {
    try {
      const formattedJson = JSON.stringify(JSON.parse(valueJSON), null, 2);
      setvalueJSON(formattedJson);
    } catch (error) {
      console.error("Invalid JSON format");
      setError(true);
      setTimeout(()=>setError(false),2000)
    }
  };

  return (
    <div className={styles["editor-section"]}>
      <AceEditor
        mode="json"
        theme="xcode"
        name="editorjson"
        fontSize={16}
        showPrintMargin={false}
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
        style={{ borderRadius: "8px", width: "920px" }}
        value={valueJSON}
        onChange={handleChange}
        wrapEnabled={true}
        enableSnippets={true}
      />
      <div onClick={handleBeatify} className={styles["button-beautify"]}>
        Beautify
      </div>
      {error &&<div className={`${styles["sooner-error"]}`}>Invalid JSON format</div>}
    </div>
  );
};

export default Editor;
