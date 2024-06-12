import { Paper, Title, Text, Button, Flex, Avatar } from "@mantine/core";
import colors from "./colors";

const AppContent = () => {
    const links: any = [];
    return (
        <Paper bg={colors.Grey} radius={15} p="xl">
            <Flex direction="column" gap={15} align="center">
                <Avatar src="avatar.png" alt="profile" size="lg"/>
                <Title>Hadar Shoshan</Title>
                <Text>Israel, north and center</Text>
                <Text>"Full stack developer."</Text>
                <>
                    {
                        links.map((linkItem: any) => {
                            return (
                                <Button>
                                    {linkItem.name} 
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