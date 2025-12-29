import { fetcher } from "./fetcher";

export const questionApi = {
    getDetail: () => fetcher("questions/detail/T002"),
};
