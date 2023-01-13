export interface IFileStorage {
  downloadLink(hash: string): string;

  storeText(text: string): Promise<string>;
  readText(hash: string): Promise<string>;

  storeFile(file: File): Promise<string>;
  readFile(hash: string): Promise<File>;
}
