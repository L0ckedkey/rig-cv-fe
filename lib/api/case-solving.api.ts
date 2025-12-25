import { fetcher } from "./fetcher";

export const caseSolvingApi = {
    getScore: () => fetcher("case-solving/score/T002"),

    getSubmission: () => fetcher("case-solving/submission/T002")
};
