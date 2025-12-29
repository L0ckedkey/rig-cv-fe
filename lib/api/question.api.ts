import { fetcher } from "./fetcher";

export const questionApi = {
    getDetail: (id: string) => fetcher("questions/detail/" + id),
};
