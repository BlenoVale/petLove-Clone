import styled from "styled-components";

export const Container = styled.div<{showMenuDD: boolean}>`
position: fixed;
top: 136px;
width: 295px;
z-index: 999;
box-shadow: 0px 0px 5px #888;
border-radius: 3px;
cursor: pointer;
display: ${props => props.showMenuDD ? 'block' : 'none'};
background-color: #fff;

.menuDD-Options {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    .menuDD-Option {
        padding: 0 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

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