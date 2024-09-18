import { Spinner, SpinnerProps } from '@blueprintjs/core';
import React from 'react';
import styled from 'styled-components';

interface ResultsLoadingProps extends SpinnerProps {
    containerProps?: ContainerProps;
}

const ResultsLoading = ({ containerProps, ...props }: ResultsLoadingProps) => (
    <Container {...containerProps}>
        <Spinner {...props} />
    </Container>
);

export default ResultsLoading;

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    height?: number | string;
}

const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
