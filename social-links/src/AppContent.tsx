import { Paper, Title, Text, Button } from "@mantine/core";
import colors from "./colors";

const AppContent = () => {
    const links: any = [];
    return (
        <Paper bg={colors.Grey}>
            <img src="" alt="profile"/>
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
        </Paper>
    );
};

export default AppContent;