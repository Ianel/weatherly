import React from "react";
import styled from "styled-components";

type PageProps = {
    title: string;
    icon: JSX.Element;
    value: string | number;
    unit: string;
};

const Card: React.FC<PageProps> = ({ title, icon, value, unit }) => {
    return (
        <CardStyle>
            <h2>{title}</h2>
            <div className="unit-container">
                <p>{icon}</p>
                <p>
                    <span className="value">{value}</span>
                    <span>{unit}</span>
                </p>
            </div>
        </CardStyle>
    );
};

export default Card;

const CardStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    font-size: medium;

    .unit-container {
        display: flex;
        align-items: center;

        p span.value {
            font-weight: 700;
        }
    }
`;
