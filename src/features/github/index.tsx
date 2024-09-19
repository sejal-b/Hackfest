import React from 'react';
import GithubTable from "./githubTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {Header, Title} from "src/features/state/conatiner.styled";

const Github = () => {
    return (
        <>
            <Header>
                <Title> <FontAwesomeIcon icon={faGithub} size="1x"  style={{ marginRight: '10px' }} /> Github </Title>
            </Header>
            <GithubTable />
        </>
    );
};

export default Github;

