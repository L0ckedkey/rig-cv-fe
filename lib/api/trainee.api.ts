import { fetcher } from "./fetcher";

export const traineeApi = {
  getTrainee: () => fetcher("trainee/T002"),

  getTrainees: () => fetcher("trainee"),

  login: (data: { email: string; password: string }) =>
    fetcher("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getUsers: () => fetcher("/users"),
};
