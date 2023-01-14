import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { colors } from "../constants/theme";

const Header: React.FC = () => {
    const [search, setSearch] = useState("");

    return (
        <HeaderStyle>
            <h1 className="heading">Weatherly</h1>
            <div className="search-container">
                <Input
                    type="search"
                    value={search}
                    placeholder="Entrer le nom d'une ville"
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                        setSearch(e.currentTarget.value);
                    }}
                />
                <Button>Rechercher</Button>
            </div>
        </HeaderStyle>
    );
};

const HeaderStyle = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .heading {
        font-size: 2.5rem;
        color: ${colors["primary"]};
    }

    .search-container {
        display: flex;
        gap: 1rem;
    }
`;

export default Header;
