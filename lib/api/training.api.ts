import { fetcher } from "./fetcher";

export const trainingApi = {
    getTrainingCount: () => fetcher("training/count"),

    login: (data: { email: string; password: string }) =>
        fetcher("/auth/login", {
            method: "POST",
            body: JSON.stringify(data),
        }),

    getUsers: () => fetcher("/users"),
};
