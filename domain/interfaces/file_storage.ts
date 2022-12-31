export interface IFileStorage {
  getFileUrl(filePath: string): Promise<string>;
  readFile(filePath: string): Promise<File>;

  storeFile(file: File): Promise<string>;
}
