import styled from "styled-components";

export const Container = styled.div`
position: fixed;
left: 0;
right: 0;
top: 0;
z-index: 1;
height: 83px;
display: flex;
border-bottom: 1px solid #ededed;
background-color: #FFF;
`;

export const Area = styled.div`
flex: 1;
margin: auto;
max-width: 1312px;
height: inherit;
display: flex;
justify-content: space-between;
align-items: center;
`;

export const Logo = styled.img`
display: flex;
width: 142px;
height: 45px;
`;

export const CartArea = styled.div`
margin-left: 20px;
margin-right: 30px;
cursor: pointer;

svg {
    stroke: #d9d3cc;
}

&:hover {
    svg {
        stroke: #4939ac;
    }
}
`;