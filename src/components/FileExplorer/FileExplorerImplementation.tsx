import { useState } from "react";
import { FileOrFolder } from "./types";

interface FileExplorerProps {
  data: FileOrFolder[] | undefined;
}
export default function FileExplorer({ data }: FileExplorerProps) {
  if (!data || data.length < 0) {
    return null;
  }

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
    <ul>
      {dataToDisplay.map(({ id, name, children, childrenOpen }) => {
        let display = "none";
        if (childrenOpen) {
          display = "block";
        }
        return (
          <li key={`${id}${name}`}>
            <button
              style={{ cursor: "pointer" }}
              onClick={() => handleDisplayChildren(id, children)}
            >
              📁{name}
            </button>
            <div style={{ display }}>
              <FileExplorer data={children} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}
