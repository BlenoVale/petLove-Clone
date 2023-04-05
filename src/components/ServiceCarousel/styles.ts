import styled from "styled-components";

export const Container = styled.div`
padding: 0 20px 40px 20px;
    .service-up-area {
        margin-top: 50px;
        margin-bottom: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .service-title {
            h3 {
                margin: 0;
                font-size: 20px;
            }
    
            p {
                margin: 0;
                margin-top: 5px;
    
                .logo1 {
                    color: #02a0e3;
                    font-weight: bold;
                }
    
                .logo2 {
                    color: #4e2096;
                    font-weight: bold;
                }
            }
        }

        .service-arrows {
            display: flex;
            gap: 10px;
            margin-right: 20px;

            .Arrow-area {
                display: flex;
                justify-content: center;
                alignt-items: center;
                background-color: #4e2096;
                border-radius: 50%;
                cursor: pointer;

                svg {
                    fill: #fff;
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }

    .Service-items-area {
        display: flex;
        gap: 15px;
        overflow: hidden;
        transition: all ease 3s;
        scroll-behavior: smooth;
    }
`;