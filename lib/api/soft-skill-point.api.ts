import { fetcher } from "./fetcher";

export const softSkillPointApi = {
    getDetail: () => fetcher("trainee-soft-skill-point/detail/T002"),

    getPoint: () => fetcher("trainee-soft-skill-point/point/T002")
};
