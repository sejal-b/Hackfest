import React from 'react';
import SlackTable from "./slackTable";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlack } from '@fortawesome/free-brands-svg-icons';
import {Header, Title} from "../state/conatiner.styled";

const Slack = () => {
    return (
        <>
            <Header>
                <Title>
                    <FontAwesomeIcon icon={faSlack} size="1x" style={{ marginRight: '10px' }} />
                        Slack
                        </Title>
            </Header>
            <SlackTable />
        </>
    );
};
export default Slack;