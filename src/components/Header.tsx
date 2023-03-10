import React, { FormEvent, useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import { colors } from "../constants/theme";
import { states } from "../states";
import { IGeoCoordinates } from "../interfaces/IGeoCoordinates";

const Header: React.FC = () => {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState<GeolocationPosition>();

    const getCoordinates = async (search: string) => {
        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=5&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
            }`
        );
        const coordinates = await response.json();

        return { lat: coordinates[0]["lat"], lon: coordinates[0]["lon"] };
    };

    const getWeatherData = async ({ lon, lat }: IGeoCoordinates) => {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
                import.meta.env.VITE_WEATHER_API_KEY
            }&units=metric&lang=fr`
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

    const onButtonClick = async () => {
        states.isActive = true;
        states.loading = true;
        await handleSearch(search);
        states.loading = false;
    };

    const keyHandler = (event: any) => {
        if (event.key === "Enter") {
            onButtonClick();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", keyHandler);

        return () => document.removeEventListener("keydown", keyHandler);
    }, [search]);

    /*  const getCurrentPosition = (
        success: PositionCallback,
        error: PositionErrorCallback
    ) => {
        navigator.geolocation.getCurrentPosition(success, error);
    };

    const success = async (position: GeolocationPosition) => {
        const datas = await getWeatherData({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
        });

        states.weatherInfos = datas;
        console.log("Hiiii");
    };

    const error = (error: GeolocationPositionError) => {
        console.log(error);
    };

    useEffect(() => {
        getCurrentPosition(success, error);
    }, [states]);
 */
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
                <Button onClick={onButtonClick}>Rechercher</Button>
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
    font-family: "Roboto";

    .heading {
        font-size: 2.5rem;
        color: ${colors["primary"]};
    }

    .search-container {
        display: flex;
        gap: 1rem;
    }

    @media screen and (max-width: 596px) {
        margin: 2rem;

        .search-container {
            display: flex;
            flex-direction: column;
            width: 100%;
        }
    }
`;

export default Header;
