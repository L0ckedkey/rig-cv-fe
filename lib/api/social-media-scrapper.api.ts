import { fetcher } from "./fetcher";

export const socialMediaScrapper = {
    getLastScrapped: (id: string) => fetcher("social-media-scraper/last-scrapped/"+id),
};
