import React from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";

type PageProps = {
    children: string;
    onClick?: () => void;
    bgColor?: string;
    color?: string;
};

const Button: React.FC<PageProps> = ({ children, onClick }) => {
    return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
};

const ButtonStyle = styled.button`
    text-decoration: none;
    outline: none;
    border: none;
    padding: 0.75rem 1.5rem;
    color: white;
    background-color: ${colors["primary"]};
    border-radius: 0.5rem;
    cursor: pointer;
`;

export default Button;
