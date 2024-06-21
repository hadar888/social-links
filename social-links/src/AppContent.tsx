import { Paper, Title, Text, Button, Flex, Avatar } from "@mantine/core";
import colors from "./colors";
import { Link } from "./modals/link";
import { useContext } from "react";
import { ProfileContext } from "./Contexts/ProfileContext";

const AppContent = () => {
    const { profile } = useContext(ProfileContext);

    const openLink = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const href = event.currentTarget.value;
        window.open(href,'_blank')
    };
    
    return (
        <Paper bg={colors.DarkGrey} radius={15} p="xl" style={{margin: '40px'}}>
            <Flex direction="column" gap={15} align="center">
                <Avatar src={profile.imgPath} alt="profile" size="lg"/>
                <Flex direction="column" align="center">
                    <Title order={3}>{profile.fullName}</Title>
                    <Text c={colors.Green} fw={700}>{profile.location}</Text>
                </Flex>
                <Text>"{profile.roll}."</Text>
                <>
                    {
                        profile.links.map((linkItem: Link) => {
                            return (
                                <Button onClick={openLink} value={linkItem.href}>
                                    {linkItem.title} 
                                </Button>
                            )
                        })
                    }
                </>
            </Flex>
        </Paper>
    );
};

export default AppContent;