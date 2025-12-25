import { fetcher } from "./fetcher";

export const hardSkillPointApi = {
    getDetail: () => fetcher("trainee-hard-skill-point/detail/T002"),

    getPoint: () => fetcher("trainee-hard-skill-point/point/T002"),

    getRadarData: () => fetcher("trainee-hard-skill-point/radar/T002")
};
