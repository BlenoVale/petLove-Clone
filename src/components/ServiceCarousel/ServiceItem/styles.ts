import styled from "styled-components";

export const Container = styled.div`
    min-width: 15.6%;
    height: 321px;
    background-color: #fcfcfc;
    border: 1px solid #f3eee8;
    border-radius: 6px;
    padding: 20px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    img {
        width: 88px;
        height: 88px;
    }

    h3 {
        margin: 0;
    }

    span {
        text-align: center;
        margin: 0 20px;
    }

    a {
        text-decoration: none;
    }

    .AgendarBtn {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fff;
        font-weight: bold;
        background-color: #4e2096;
        border-radius: 6px;

        &:hover {
          background-color: #4939ac;  
        }
    }

    .SaibaBtn {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        color: #4e2096;
        font-weight: bold;

        &:hover {
            background-color: #fff;
        }
    }
`;