import { useState } from "react";
import { FileData } from "./types";

interface FileObjectProps {
  file: FileData;
  level: number;
}
function FileObject(props: FileObjectProps) {
  const { file, level } = props;
  const [expanded, setExpanded] = useState(false);
  const { children: fileChildren, name: fileName } = file;

  const handleDisplayChildren = () => {
    if (!fileChildren) {
      return;
    }
    setExpanded(!expanded);
  };

  return (
    <li>
      <button style={{ cursor: "pointer" }} onClick={handleDisplayChildren}>
        📁{fileName}
      </button>

      {fileChildren && expanded && (
        <FileList fileList={fileChildren} level={level + 1} />
      )}
    </li>
  );
}

interface FileListProps {
  fileList: FileData[];
  level: number;
}

function FileList(props: FileListProps) {
  const { fileList, level } = props;
  return (
    <ul>
      {fileList.map((file) => {
        return <FileObject key={file.id} file={file} level={level} />;
      })}
    </ul>
  );
}

interface FileExplorerProps {
  data: FileData[];
}

function FileExplorer({ data }: FileExplorerProps) {
  return <FileList fileList={data} level={1} />;
}
export default FileExplorer;
