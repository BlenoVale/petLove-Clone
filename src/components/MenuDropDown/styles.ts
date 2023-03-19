import styled from "styled-components";

export const Container = styled.div<{showMenuDD: boolean, marginLeft: number}>`
position: fixed;
top: 136px;
width: 295px;
z-index: 999;
box-shadow: 2px 2px 10px #d9d3cc;
border-radius: 3px;
cursor: pointer;

.menuDD-Options {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;

    .menuDD-Option {
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;

        a {
            text-decoration: none;
            color: #3c4043;
        }

        svg {
            fill: #d9d3cc;
        }

        &:hover {
            background-color: #f9f9fb;
        }
    }
}
`;