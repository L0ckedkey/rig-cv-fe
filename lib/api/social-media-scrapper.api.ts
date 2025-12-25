import { fetcher } from "./fetcher";

export const socialMediaScrapper = {
    getLastScrapped: () => fetcher("social-media-scraper/last-scrapped/T002"),
};
