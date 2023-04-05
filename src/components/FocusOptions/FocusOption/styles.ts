import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    cursor: pointer;

    .iconArea {
        min-width: 58px;
        min-height: 58px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fbf9f7;
        border-radius: 50%;

        svg {
            fill: #4e2096;
        }
    }

    .option-text {
        max-width: 190px;

        p {
           margin: 0;
           font-size: 14px;
        }

        .title {
            color: #4e2096;
            font-weight: bold;
            margin-bottom: 5px;
        }
    }
`;