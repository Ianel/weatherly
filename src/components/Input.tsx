import styled from "styled-components";
import { colors } from "../constants/theme";
import { IInput } from "../interfaces/IInput";

const Input: React.FC<IInput> = ({ type, placeholder, value, onChange }) => {
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
