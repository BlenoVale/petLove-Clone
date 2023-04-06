import styled from "styled-components";

export const Container = styled.div`
padding: 0 30px 20px 30px;

.productCarousel-top-area {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        margin: 10px 0;
    }

    .productCarousel-arrows {
        display: flex;
        gap: 15px;
        margin-right: 10px;

        .Arrow-circle {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #4e2096;
            padding: 13px;
            border-radius: 50%;
            cursor: pointer;

            svg {
                fill: #fff;
                width: 20px;
                height: 20px;
            }

            &:hover {
                background-color: #4939ac;
            }
        }
    }
}

.productCarousel-bottom-area {
    margin-top: 20px;
    display: flex;
    gap: 15px;
    overflow: hidden;
    transition: all ease 3s;
    scroll-behavior: smooth;
}
`;