import { Classes, HTMLTable } from '@blueprintjs/core';
import styled, { css } from 'styled-components';
import {darkBorderColor, disabledColor, gutter, highlightColor, lightBorderColor} from "../../styles/variables";


export const Table = styled(HTMLTable)`
  width: 100%;
`;

export const Tr = styled.tr<{ disabled?: boolean; highlight?: boolean }>`
  ${({ disabled }) => (disabled ? 'opacity: 0.6;' : null)}
  ${({ disabled }) => (disabled ? `background-color: ${disabledColor};` : null)}
    ${({ highlight }) => (highlight ? `background-color: ${highlightColor};` : null)}
`;

interface CellProps {
    wrap?: boolean;
    textAlign?: 'left' | 'right' | 'center';
    verticalAlign?: 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'top' | 'bottom';
    hasBorderBottom?: boolean;
}

const cellStyle = css<CellProps>`
  &&& {
    ${(props) => (props.wrap ? '' : 'white-space: nowrap;')}
    ${(props) => (props.textAlign ? `text-align: ${props.textAlign};` : '')}
        ${(props) => (props.hasBorderBottom ? '' : `border-bottom: 1px solid ${lightBorderColor};`)}
        position: relative;
    padding-top: ${gutter};
    padding-bottom: ${gutter};
    vertical-align: ${(props) => props.verticalAlign || 'middle'};

    .${Classes.DARK} & {
      ${(props) => (props.hasBorderBottom ? '' : `border-bottom: 1px solid ${darkBorderColor};`)}
    }
  }
`;

export const Td = styled.td<CellProps>`
  ${cellStyle}
`;

export const Th = styled.th<CellProps>`
  ${cellStyle}
`;
