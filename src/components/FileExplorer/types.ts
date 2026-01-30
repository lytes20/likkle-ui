export interface FileOrFolder {
  id: number;
  name: string;
  children?: FileOrFolder[];
}
