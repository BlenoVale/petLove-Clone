import styled from "styled-components";

export const Container = styled.div<{borderColor: string}>`
border: 1px solid ${props => props.borderColor};
border-radius: 3px;
margin-left: 24px;
margin-right: 12px;
padding: 11px;
display: flex;
justify-content: space-between;
align-center: center;

input {
    border: 0;
    outline: 0;
    font-size: 14px;
}
`;