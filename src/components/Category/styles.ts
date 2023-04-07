import styled from "styled-components";

export const Container = styled.div`
width: 50%;

    .category-items {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;

        li {
            a {
                max-width: 100px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                text-decoration: none;
    
                img {
                    border-radius: 50%;
                }
    
                p {
                    font-weight: bold;
                    text-align: center;
                    color: #4e2096;
                }
            }
        }

    }
`;