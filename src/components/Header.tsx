import React, { FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { colors } from "../constants/theme";
import { states } from "../states";
import { useSnapshot } from "valtio";

type GeoCoordinates = {
    lat: number;
    lon: number;
};

const Header: React.FC = () => {
    const [search, setSearch] = useState("");

    const getCoordinates = async (search: string) => {
        const response = await fetch(
            `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${
                import.meta.env.VITE_API_KEY
            }`
        );
        const coordinates = await response.json();

        return { lat: coordinates[0]["lat"], lon: coordinates[0]["lon"] };
    };

    const getWeatherData = async ({ lon, lat }: GeoCoordinates) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
                import.meta.env.VITE_API_KEY
            }&units=metric`
        );
        const datas = await response.json();
        return datas;
    };

    const handleSearch = async (search: string) => {
        const { lat, lon } = await getCoordinates(search);
        const datas = await getWeatherData({
            lat: lat,
            lon: lon,
        });

        states.weatherInfos = datas;
    };

    return (
        <HeaderStyle>
            <h1 className="heading">Weatherly</h1>
            <div className="search-container">
                <Input
                    type="search"
                    value={search}
                    placeholder="Entrer le nom d'une ville"
                    onChange={(e: FormEvent<HTMLInputElement>) => {
                        if (!e.currentTarget.value) {
                            states.isActive = false;
                        }
                        setSearch(e.currentTarget.value);
                    }}
                />
                <Button
                    onClick={async () => {
                        states.isActive = true;
                        states.loading = true;
                        await handleSearch(search);
                        states.loading = false;
                    }}
                >
                    Rechercher
                </Button>
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