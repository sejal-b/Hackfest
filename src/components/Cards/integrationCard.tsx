import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import IntegrationModal from "../Modal/integrationModal";

interface IntegrationCardProps {
  logo: string;
  name: string;
  installed: boolean;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  logo,
  name,
  installed: initialInstalled,
}) => {
  const [open, setOpen] = useState(false);
  const [installed, setInstalled] = useState(initialInstalled);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTokenSave = async (token: string) => {
    try {
      // Send the token to the backend
      await fetch("/api/save-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, token }),
      });

      // Mark as installed after successful save
      setInstalled(true);
      handleClose();
    } catch (error) {
      console.error("Error saving token: ", error);
    }
  };

  const tokenLink =
    name === "Slack"
      ? "https://api.slack.com/authentication/token-types"
      : "https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token";

  const description = `This is the ${name} integration. Enter your token or PAT below to proceed.`;

  return (
    <>
      <Card sx={{ width: 300, textAlign: "center" }} onClick={handleClickOpen}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={logo}
            alt={`${name} logo`}
            sx={{
              objectFit: "contain",
              margin: "20px auto 0",
              height: "175px",
            }}
          />
          <CardContent>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Button
                size="small"
                variant="contained"
                color={installed ? "primary" : "secondary"}
                sx={{ marginTop: "10px" }}
              >
                {installed ? "Installed" : "Not Installed"}
              </Button>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      <IntegrationModal
        open={open}
        onClose={handleClose}
        title={name}
        description={description}
        tokenLink={tokenLink}
        installed={installed}
        onTokenSave={handleTokenSave}
      />
    </>
  );
};

export default IntegrationCard;
