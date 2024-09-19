import React, { useState } from "react";
import {
    Box,
    Drawer,
    List,
    ListItemButton,
    ListItemText,
    IconButton,
    Typography,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

const Link = styled(RouterLink)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit",
}));

const Sidebar: React.FC = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const toggleDrawer = (isOpen: boolean) => () => {
        setOpen(isOpen);
    };

    return (
        <>
            <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
                sx={{ marginLeft: 2, position: "fixed", zIndex: 1301 }}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            color: "blue",
                            marginInlineStart: "15px",
                            cursor: "pointer",
                            padding: "1rem",
                        }}
                    >
                        Integration
                    </Typography>
                    <List>
                        <ListItemButton
                            component={Link}
                            to="/slack"
                            onClick={toggleDrawer(false)}
                        >
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: "1.2rem",
                                            fontWeight:
                                                location.pathname === "/slack" ? "bold" : "normal",
                                        }}
                                    >
                                        Slack
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                        <ListItemButton
                            component={Link}
                            to="/github"
                            onClick={toggleDrawer(false)}
                        >
                            <ListItemText
                                primary={
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontSize: "1.2rem",
                                            fontWeight:
                                                location.pathname === "/github" ? "bold" : "normal",
                                        }}
                                    >
                                        GitHub
                                    </Typography>
                                }
                            />
                        </ListItemButton>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Sidebar;
