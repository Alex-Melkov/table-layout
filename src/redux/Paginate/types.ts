import { Status } from "../Posts/types";

export interface IPaginateSliceState {
    pageCount: number;
    pageNumber: number;
    status: Status
};