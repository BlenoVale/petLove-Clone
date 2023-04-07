import styled from "styled-components";

export const Container = styled.div`
padding: 0 20px 40px 20px;
display: flex;
flex-direction: column;
justify-content: center;
aling-items: center;

    .grid-area {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-column-gap: 15px;
        grid-template-rows: auto;
        grid-row-gap: 15px;

        a {
            img {
                width: auto;
                max-height: 170px;

                @media screen and (max-width: 1312px) {
                    max-height: 160px;
                }
            }
        }
    }


`;