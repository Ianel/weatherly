import styled from "styled-components";
import { colors } from "../constants/theme";
import { IInput } from "../interfaces/IInput";

const Input: React.FC<IInput> = ({
    type,
    placeholder,
    value,
    onChange,
    ref,
}) => {
    return (
        <InputStyle
            ref={ref}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

const InputStyle = styled.input`
    padding: 0.5rem 1rem;
    border: 2px solid ${colors["primary"]};
    border-radius: 0.5rem;

    &:focus {
        border: 2px solid ${colors["primary"]};
        outline: none;
    }

    &::placeholder {
        color: #3d3737;
    }

    &:active {
        border: 2px solid ${colors["primary"]};
    }
`;

export default Input;
