import React, { ReactNode } from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";
import { ICard } from "../interfaces/ICard";

const Card: React.FC<ICard> = ({ title, icon, value, unit }) => {
    return (
        <CardStyle>
            <h2>{title}</h2>
            <div className="unit-container">
                <p>{icon}</p>
                <p>
                    <span className="value">{value}</span>{" "}
                    <span className="unit">{unit}</span>
                </p>
            </div>
        </CardStyle>
    );
};

export default Card;

const CardStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: medium;
    width: 250px;
    height: 250px;
    border: 2px solid #f6f6f8;
    background-color: #f6f6f8;

    h2 {
        color: #303030;
    }

    .unit-container {
        display: flex;
        gap: 2rem;
        align-items: center;

        p {
            span.value {
                font-weight: 700;
                font-size: 2rem;
                color: ${colors["primary"]};
            }
            span.unit {
                font-size: 1.5rem;
                margin-left: 0.25rem;
            }
        }
    }

    @media screen and (max-width: 596px) {
        width: 300px;
        height: 300px;
    }
`;
