import { Link } from "./link";

export interface Profile {
    links: Link[],
    imgPath: string,
    fullName: string,
    location: string,
    roll: string,
};
