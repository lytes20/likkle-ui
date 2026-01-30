export interface FileData {
  id: number;
  name: string;
  children?: FileData[];
}
