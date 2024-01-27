import "./App.css";
import { Sidebar, Chat } from "./components";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      {/* chatbody */}
      <div className="app__body">
        <Sidebar></Sidebar>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;
