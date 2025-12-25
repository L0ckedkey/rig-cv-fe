import { fetcher } from "./fetcher";

export const absentApi = {
    getValidAbsents: () => fetcher("absents/valid-count/T002"),

    login: (data: { email: string; password: string }) =>
        fetcher("/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
        }),

    getUsers: () => fetcher("/users"),
};
