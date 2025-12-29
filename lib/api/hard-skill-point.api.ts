import { fetcher } from "./fetcher";

export const hardSkillPointApi = {
    getDetail: (id: string) => fetcher("trainee-hard-skill-point/detail/"+id),

    getPoint: (id: string) => fetcher("trainee-hard-skill-point/point/"+id),

    getRadarData: (id: string) => fetcher("trainee-hard-skill-point/radar/"+id)
};
