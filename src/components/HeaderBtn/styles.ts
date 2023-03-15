import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
gap: 5px;
padding: 0 12px;
cursor: pointer;

button {
    border: none;
    font-size: 16px;
    color: #7A7368;
    background-color: transparent;
    cursor: pointer;
}

&:hover {
    svg {
        fill: #4e2096;
    }

    button {
        color: #4e2096;
    }
}
`;

