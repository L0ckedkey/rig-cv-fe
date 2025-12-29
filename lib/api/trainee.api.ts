import { fetcher } from "./fetcher";

export const traineeApi = {
  getTrainee: (id: string) => fetcher("trainee/"+id),

  getTrainees: () => fetcher("trainee"),

  login: (data: { email: string; password: string }) =>
    fetcher("/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getUsers: () => fetcher("/users"),
};
