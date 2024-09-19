import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

interface IntegrationModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description: string;
    tokenLink: string;
    installed: boolean;
    onTokenSave: (token: string) => void;
}

const IntegrationModal: React.FC<IntegrationModalProps> = ({
                                                               open,
                                                               onClose,
                                                               title,
                                                               description,
                                                               tokenLink,
                                                               installed,
                                                               onTokenSave,
                                                           }) => {
    const [token, setToken] = useState("");

    const handleSubmit = () => {
        onTokenSave(token);
        setToken("");
    };

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                <Typography variant="body1">{description}</Typography>
                <Box mt={2}>
                    <TextField
                        fullWidth
                        label="Enter your token or PAT"
                        variant="outlined"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                </Box>
                <Box mt={2}>
                    <Link href={tokenLink} target="_blank" rel="noopener" variant="body2">
                        How to generate token or PAT
                    </Link>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} color="primary">
                    {installed ? "Update" : "Submit"}
                </Button>
                <Button onClick={onClose} color="secondary">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default IntegrationModal;
