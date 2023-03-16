import styled from "styled-components";

export const Container = styled.nav`
max-width: 1312px;
margin: auto;
margin-top: 84px;
height: 52px;
display: flex;
justify-content: center;
align-items: center;

ul {
    margin: 0;
    padding: 0 185px;
    height: 100%;
    flex: 1;
    list-style: none;
    display: flex;
    justify-content: space-between;
}

li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    a {
        padding: 14px 10px;
        text-decoration: none;
        color: #7A7368;

        span {
            margin-left: 5px;
            font-size: 14px;
            font-weight: bold;
            color: #FFF;
            background-color: #4939ac;
            padding: 0 3px;
            border-radius: 4px;
        }
    }

    .bottom-bar {
        width: 3px;
        height: 3px;
        transition: width .4s;
    }

    &: hover {
        .bottom-bar {
            width: 100%;
            max-height: 3px;
            background-color: #4939ac;
        }
    }
}
`;