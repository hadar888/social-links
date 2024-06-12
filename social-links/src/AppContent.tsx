import { Paper, Title, Text, Button, Flex, Avatar } from "@mantine/core";
import colors from "./colors";

const AppContent = () => {
    const links: any = [];
    return (
        <Paper bg={colors.Grey} radius={15} p="xl">
            <Flex direction="column" gap={15} align="center">
                <Avatar src="avatar.png" alt="profile" size="lg"/>
                <Flex direction="column" align="center">
                    <Title order={4}>Hadar Shoshan</Title>
                    <Text c={colors.Green} fw={700}>Israel, North and Center</Text>
                </Flex>
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