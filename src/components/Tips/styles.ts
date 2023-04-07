import styled from "styled-components";

export const Container = styled.div`
padding: 0 20px 40px 20px;

    .tips-articles {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: auto;
        grid-row-gap: 30px;

        a {
            text-decoration: none;
            display: flex;
            align-items: start;
            gap: 15px;
            
            img {
                width: 212px;
                height: auto;
            }

            .tips-text {
                max-width: 340px;

                p {
                    margin 0 0 35px 0;
                    color: #3c4043;
                }
            }
        }
    }
`;