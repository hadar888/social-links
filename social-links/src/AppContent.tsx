import { Paper, Title, Text, Button, Flex, Avatar } from "@mantine/core";
import colors from "./colors";
import { Link } from "./modals/link";

const AppContent = () => {
    const links: Link[] = [{
        title: 'GitHub',
        href: '',
    },
    {
        title: 'LinkedIn',
        href: '',
    },
    {
        title: 'Instagram',
        href: '',
    }];

    return (
        <Paper bg={colors.DarkGrey} radius={15} p="xl" style={{margin: '40px'}}>
            <Flex direction="column" gap={15} align="center">
                <Avatar src="avatar.png" alt="profile" size="lg"/>
                <Flex direction="column" align="center">
                    <Title order={3}>Hadar Shoshan</Title>
                    <Text c={colors.Green} fw={700}>Israel, North and Center</Text>
                </Flex>
                <Text>"Full stack developer."</Text>
                <>
                    {
                        links.map((linkItem: Link) => {
                            return (
                                <Button component="a" href={linkItem.href}>
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