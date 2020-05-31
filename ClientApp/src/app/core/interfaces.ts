export interface IFetchedBook {
  id: number;
  title: string;
  genre: string;
  description: string;
  year: number;
  downloadsCount: number;
  filename: string;
  image: IImage;
  author: IFetchedAuthor;
}

export interface IFetchedAuthor {
  id: number;
  firstname: string;
  lastname: string;
  image: IImage;
}

export interface IImage {
  id: number;
  filename: string;
  type: string;
  picBytes: any;
}
