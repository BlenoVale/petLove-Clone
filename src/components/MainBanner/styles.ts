import styled from "styled-components";

export const Container = styled.div<{slide: string}>`
flex: 1;
background-color: #f3eee8;
border-radius: 8px;
overflow: hidden;
display: flex;
align-items: center;

.bannerImg {
    width: 100%;
    height: 100%;
    background-image: url(${props => props.slide});
    background-position: center;
    background-size: cover;
}

.arrowArea {
    position: absolute;
    z-index: 999;
    width: 952px;
    display: flex;
    justify-content: space-between;

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
}

`;