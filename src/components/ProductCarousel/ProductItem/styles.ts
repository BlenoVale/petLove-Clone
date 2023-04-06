import styled from "styled-components";

export const Container = styled.a`
    text-decoration: none;
    min-width: 17.6%;
    height: 321px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border: 1px solid #f3eee8;
    border-radius: 6px;
    padding: 20px;
    color: #3c4043;

    img {
        width: 120px;
        height: 120px;
    }

    .product-title {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 14px;
        font-weight: normal;
        margin-right: 30px;
    }

    .product-subtitle {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        margin-bottom: 24px;

        a {
            color: #3c4043;
        }
    }

    .product-price-area {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .product-price {
            font-size: 14px;
            margin-bottom: 4px;
        }

        .product-special-price {
            color: #4e2096;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .product-price-subtitle {
            display:flex;
            align-items: center;
            gap: 5px;
            color: #4e2096;
            font-size: 12px;
            font-weight: bold;

            svg {
                fill: #4e2096;
                stroke: #4e2096;
                width: 14px;
                height: 14px;
            }
        }
    }
`;