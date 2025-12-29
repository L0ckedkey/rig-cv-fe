import { fetcher } from "./fetcher";

export const softSkillPointApi = {
    getDetail: (id: string) => fetcher("trainee-soft-skill-point/detail/"+id),

    getPoint: (id: string) => fetcher("trainee-soft-skill-point/point/"+id)
};
