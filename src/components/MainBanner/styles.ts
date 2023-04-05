import styled from "styled-components";

export const Container = styled.div`
flex: 1;
position: relative;
background-color: #f3eee8;
border-radius: 8px;
display: flex;

    .bannerItems {
        flex: 1;
        display: flex;
        overflow: hidden;
        transition: all ease 3s;
        scroll-behavior: smooth;

        img {
            max-width: 100%;
            max-height: 100%;
        }
    }

    .arrowIcon {
        width: 34px;
        height: 34px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 50%;
        margin: 0 10px;
        cursor: pointer;

        svg {
            fill: #371669;
        }

        &:hover {
            background-color: rgba(255, 255, 255, 1);
        }
    }

    .previous {
        position: absolute;
        left: 0;
        bottom: 45%;
    }

    .next {
        position: absolute;
        right: 0;
        bottom: 45%;
    }
`;