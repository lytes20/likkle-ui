import { useState } from "react";
import FileExplorer from "./src/components/FileExplorer";
import HolyGrail from "./src/components/HolyGrail";

const COMPONENTS = {
  FILE_EXPLORER: "File Explorer",
  HOLY_GRAIL: "Holy Grail",
};

const COMPONENT_NODE = {
  [COMPONENTS.FILE_EXPLORER]: <FileExplorer />,
  [COMPONENTS.HOLY_GRAIL]: <HolyGrail />,
};

function App() {
  const [componentToDisplay, setComponentToDisplay] = useState(
    COMPONENTS.FILE_EXPLORER
  );

  const handleComponentChange = (value: string) => {
    setComponentToDisplay(value);
  };
  return (
    <div style={{ display: "flex", border: "1px solid black" }}>
      <div>
        <h1>Components</h1>
        <ul>
          {Object.values(COMPONENTS).map((name) => {
            return (
              <li key={name}>
                <button onClick={() => handleComponentChange(name)}>
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div style={{ border: "1px solid black" }}>
        <h1>Components View</h1>
        {COMPONENT_NODE[componentToDisplay]}
      </div>
    </div>
  );
}

export default App;
