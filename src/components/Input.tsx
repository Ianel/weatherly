import { FormEvent } from "react";
import styled from "styled-components";
import { colors } from "../constants/theme";

type PageProps = {
    type: string;
    value?: string;
    placeholder?: string;
    onChange?: (e: FormEvent<HTMLInputElement>) => void;
};

const Input: React.FC<PageProps> = ({ type, placeholder, value, onChange }) => {
    return (
        <InputStyle
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

const InputStyle = styled.input`
    padding: 0.5rem 1rem;
    border: 2px solid grey;
    border-radius: 0.5rem;

    &:active {
        border: 2px solid ${colors["primary"]};
    }
`;

export default Input;
