import styled from "styled-components";

export const container = styled.div`
width: 252px;
height: 242px;
padding: 24px;
background-color: #4e2096;
border-radius: 8px;
overflow: hidden;

    .Infos-firstPosition {
        position: absolute;
        width: inherit;

        .infoArea {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;

            .infoText {
                color: #FFF;
                h3 {
                    margin: 0;
                    padding: 0;
                }

                p {
                    margin: 0;
                    padding: 2px 0;
                    font-size: 13px;
                }
            }
        }

        button {
            width: 100%;
            margin-top: 20px;
            margin-bottom: 20px;
            padding: 13px;
            border: none;
            border-radius: 8px;
            background-color: #4e2096;
            color: #fff;
            cursor: pointer;

            &:hover {
                background-color: #4939ac;
            }
        }
    }

    .Infos-secondPosition {
        position: absolute;
        width: inherit;
        display: flex;
        flex-direction: column;
        gap: 15px;
        h3 {
            margin: 0;
            padding: 0;
            font-size: 25px;
            color: #f29e43;
        }

        p {
            margin: 0;
            padding: 0;
            color: #fff;
        }

        .subtitle {
            font-weight: bold;
            color: #fff;
            font-size: 24px;
        }

        button {
            width: 100%;
            margin-top: 10px;
            margin-bottom: 20px;
            padding: 13px;
            border: none;
            border-radius: 8px;
            background-color: #4e2096;
            color: #fff;
            cursor: pointer;

            &:hover {
                background-color: #4939ac;
            }
        }

    }
`;

export const Circle = styled.div<{ cPosition: boolean }>`
width: 409px;
height: 409px;
background-color: #371669;
border-radius: 100%;
margin-top: ${props => props.cPosition ? '100' : '-100'}px;
margin-left: ${props => props.cPosition ? '80' : '-200'}px;
transition: all ease .7s;
`;