export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
};
  
export interface IPostSliceState {
    items: IPost[];
    status: Status
};
  
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
};