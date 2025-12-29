import { fetcher } from "./fetcher";

export const cheatApi = {
    getDetail: (id: string) => fetcher("cheat/detail/" + id),

    getInfo: (id: string) => fetcher("cheat/info/" + id),
};
