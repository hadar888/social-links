import { Profile } from "../modals/profile";

export const getProfile = (): Profile => {
    return {
        links: [{
            title: 'GitHub',
            href: 'https://github.com/hadar888',
        },
        {
            title: 'linkedIn',
            href: 'https://www.linkedin.com/in/hadar-shoshan-b87177119/',
        },
        {
            title: 'Instagram',
            href: 'https://www.instagram.com/hadar_shoshan/',
        }],
        imgPath: 'avatar.png',
        fullName: 'Hadar Shoshan',
        location: 'Israel, North and Center',
        roll: 'Fullstack developer',
    };
}