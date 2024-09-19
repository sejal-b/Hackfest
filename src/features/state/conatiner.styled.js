import styled from 'styled-components';
import { Classes } from '@blueprintjs/core';
import { darkBgColor } from 'src/styles/variables';

export const DetailsTableContainer = styled.div`
  .${Classes.DARK} & {
    background-color: ${darkBgColor};
  }

  padding: 16px;
`;

export const DetailsTable = styled.table`
  width: 100%;
  margin-bottom: 16px;

  th {
    text-align: left;
    border: 1px solid rgba(16, 22, 26, 0.1);
    padding: 8px;

    .${Classes.DARK} & {
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  td {
    border: 1px solid rgba(16, 22, 26, 0.1);
    text-align: left;
    padding: 10px;

    .${Classes.DARK} & {
      border: 1px solid rgba(255, 255, 255, 0.05);
    }
  }

  tbody tr:nth-child(odd) td {
    background: rgba(191, 204, 214, 0.15);

    .${Classes.DARK} & {
      background: rgba(92, 112, 128, 0.15);
    }
  }
`;