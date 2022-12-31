import { SecurityToken } from "../schema/token_pb";

export interface ITokenHub {
  getCertifiedHeader(
    address: string
  ): Promise<SecurityToken.Metadata | undefined>;

  isFavorite(address: string): Promise<boolean>;
  getFavorites(): Promise<string[]>;

  addFavorite(address: string): Promise<boolean>;
  removeFavorite(address: string): Promise<boolean>;
}
