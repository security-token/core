export interface IFileStorage {
  storeFile(file: File): Promise<string>;
  readFile(fileHash: string): Promise<File>;
  getFileUrl(fileHash: string): Promise<string>;
}
