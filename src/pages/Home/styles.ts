import styled from "styled-components";

export const Container = styled.div`
margin: 0 auto;
max-width: 1312px;

@media screen and (max-width: 1312px) {
    max-width: 1250px;
}
`;

export const BannerArea = styled.div`
    margin: 33px 20px;
    display: flex;
    gap: 20px;
`;
