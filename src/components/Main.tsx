import React, { useEffect } from "react";
import styled from "styled-components";
import { useSnapshot } from "valtio";
import { states } from "../states";
import Card from "./Card";

export interface IWeatherInfos {
    coord: {
        lon: number;
        lat: number;
    };
    weather: [
        {
            id: number;
            main: string;
            description: string;
            icon: string;
        }
    ];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level: number;
        grnd_level: number;
    };
    visibility: number;
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
    clouds: {
        all: number;
    };
    dt: number;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

const Main: React.FC = () => {
    const {
        weatherInfos,
        loading,
        isActive,
    }: { weatherInfos: any; loading: boolean; isActive: boolean } =
        useSnapshot(states);

    return (
        <MainStyle>
            {!isActive ? (
                <h2>No results</h2>
            ) : (
                <>
                    {" "}
                    {loading ? (
                        <div className="loader">Loading...</div>
                    ) : (
                        <>
                            {" "}
                            <Card
                                title="Temperature"
                                value={weatherInfos["main"]["temp"]}
                                unit="°C"
                            />
                            <Card
                                title="Humidité"
                                value={weatherInfos["main"]["humidity"]}
                                unit="%"
                            />
                            <Card
                                title="Pression"
                                value={weatherInfos["main"]["pressure"]}
                                unit="Pa"
                            />
                            <Card
                                title="Vent"
                                value={weatherInfos["wind"]["speed"]}
                                unit="km/h"
                            />
                        </>
                    )}
                </>
            )}
        </MainStyle>
    );
};

export default Main;

const MainStyle = styled.main`
    max-width: 90vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: stretch;
    margin-top: 3rem;

    .loader {
        height: 50vh;
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: 700;
    }
`;
