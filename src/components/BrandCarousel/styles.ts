import styled from "styled-components";

export const Conatainer = styled.div`
padding: 0 20px 40px 20px;

    h2 {
        margin: 10px 0;
    }

.brand-carousel {
    display: flex;
    align-items: center;

    .brand-carousel-arrow {
        display: flex;
        svg {
            fill: #4e2096;
            width: 60px;
            height: 60px;
            cursor: pointer;
        }
    }

    .brand-carousel-items {
        flex: 1;
        display: flex;
        gap: 10px;
        overflow: hidden;
        transition: all ease 3s;
        scroll-behavior: smooth;

        img {
            display: flex;
            width: 160px;
            height: 160px;
        }
    }
}
`;