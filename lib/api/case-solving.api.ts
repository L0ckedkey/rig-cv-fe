import { fetcher } from "./fetcher";

export const caseSolvingApi = {
    getScore: (id: string) => fetcher("case-solving/score/"+id),

    getSubmission: (id: string) => fetcher("case-solving/submission/"+id)
};
