import { ReactNode, createContext, useEffect, useState } from "react"
import { Profile } from "../modals/profile";
import { getProfile } from "../Api/profileApi";

const emptyProfile = {
    links: [],
    imgPath: '',
    fullName: '',
    location: '',
    roll: '',
};

interface ProfileContextType {
    profile: Profile,
    setProfile: (profile: Profile) => void
}

export const ProfileContext = createContext<ProfileContextType>({
    profile: emptyProfile,
    setProfile: () => {}
});

interface ProfileProviderProps {
    children: ReactNode,
}

export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const [profile, setProfile] = useState<Profile>(emptyProfile);

    useEffect(()=> {
        const fetchProfile = async () => {
            const data: Profile = getProfile();
            setProfile(data);
        };

        fetchProfile();
    }, [])

    return (
        <ProfileContext.Provider value={{profile, setProfile}}>
            {children}
        </ProfileContext.Provider>
    );
}