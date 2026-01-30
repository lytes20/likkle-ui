import { useState } from "react";
import { FileOrFolder } from "./types";

interface FileExplorerProps {
  data: FileOrFolder[];
}
export default function FileExplorer({ data }: FileExplorerProps) {
  const [message, setMessage] = useState("File Explorer");
  const [dataToDisplay, setDataToDisplay] = useState(
    data.map((item) => ({ ...item, childrenOpen: false }))
  );
  const handleDisplayChildren = (
    id: number,
    children: FileOrFolder[] | undefined
  ) => {
    if (!children) {
      return;
    }
    setDataToDisplay((prevData) => {
      return prevData.map((dataItem) => {
        if (dataItem.id == id) {
          return {
            ...dataItem,
            childrenOpen: !dataItem.childrenOpen,
          };
        }
        return dataItem;
      });
    });
  };

  return (
    <div>
      <h1>{message}</h1>
      <ul>
        {dataToDisplay.map(({ id, name, children, childrenOpen }) => {
          let display = "none";
          if (childrenOpen) {
            display = "block";
          }
          return (
            <li key={id}>
              <button
                style={{ cursor: "pointer" }}
                onClick={() => handleDisplayChildren(id, children)}
              >
                📁{name}
              </button>
              <ul style={{ display: `${display}` }}>
                {children?.map((child) => (
                  <li key={`${child.id}-${child.name}`}>
                    <button onClick={() => handleDisplayChildren(children)}>
                      {child.name}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
