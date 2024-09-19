import React from "react";
import { Grid, Box } from "@mui/material";
import slackLogo from "src/assets/slack-logo.png";
import githubLogo from "src/assets/github-logo.png";
import IntegrationCard from "../components/Cards/integrationCard";

const Integrations: React.FC = () => {
    const integrations = [
        { name: "Slack", logo: slackLogo, installed: true },
        { name: "GitHub", logo: githubLogo, installed: false },
    ];

    return (
        <div>
            <Grid container justifyContent="center" spacing={3} padding={3}>
                {integrations.map((integration) => (
                    <Grid item key={integration.name}>
                        <Box>
                        <IntegrationCard
                                name={integration.name}
                                logo={integration.logo}
                                installed={integration.installed}
                            />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Integrations;
