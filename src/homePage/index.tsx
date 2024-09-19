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
    <Box sx={{ padding: 3 }}>
      <Grid container justifyContent="center" spacing={3}>
        {integrations.map(({ name, logo, installed }) => (
          <Grid item key={name}>
            <IntegrationCard name={name} logo={logo} installed={installed} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Integrations;
