import styled from "styled-components";

export const Container = styled.div`
padding: 0 20px 40px 20px;
margin: 70px 0;
display: flex;
justify-content: center;

    form {
        width: 100%;
        height: 130px;
        background-color: #4e2096;
        padding: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        h2 {
            margin: 0;
            color: #fff;
        }

        .input-area {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 15px;

            input {
                flex: 1;
                padding: 24px 16px;
                outline: none;
                border: none;
                border-radius: 8px;
                font-size: 16px;
            }

            select {
                width: 384px;
                padding: 24px 16px;
                outline: none;
                border: none;
                border-radius: 8px;
                font-size: 16px;
            }

            button {
                width: 262px;
                padding: 24px 16px;
                border-radius: 8px;
                background-color: #fff;
                cursor: pointer;
                font-size: 16px;
            }
        }
    }
`;