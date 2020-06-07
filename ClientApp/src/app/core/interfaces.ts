export interface IFetchedBook {
  id: number;
  title: string;
  genre: string;
  description: string;
  year: number;
  downloadsCount: number;
  filename: string;
  image: IFetchedFile;
  author: IFetchedAuthor;
}

export interface IFetchedAuthor {
  id: number;
  firstname: string;
  lastname: string;
  image: IFetchedFile;
}

export interface IFetchedFile {
  id: number;
  filename: string;
  type: string;
  picBytes: any;
}

export interface IBookDto {
  title: string;
  genre: string;
  description: string;
  year: number;
  filename: string;
  authorId: number;
  imageId: number;
}
