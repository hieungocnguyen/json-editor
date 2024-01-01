import Editor from "./components/Editor/Editor";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width:"100vw",
        height:"100vh",
        position:"relative"
      }}
    >
      <Editor />
    </div>
  );
}

export default App;
