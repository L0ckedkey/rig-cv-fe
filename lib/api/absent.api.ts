import { fetcher } from "./fetcher";

export const absentApi = {
    getValidAbsents: (id: string) => fetcher("absents/valid-count/"+id),

    login: (data: { email: string; password: string }) =>
        fetcher("/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
        }),

    getUsers: () => fetcher("/users"),
};
