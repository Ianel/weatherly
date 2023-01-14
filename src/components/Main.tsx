import React from "react";
import styled from "styled-components";
import Card from "./Card";

const Main: React.FC = () => {
    const datas = {
        coord: {
            lon: 44,
            lat: 15,
        },
        weather: [
            {
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d",
            },
        ],
        base: "stations",
        main: {
            temp: 295.95,
            feels_like: 295.36,
            temp_min: 295.95,
            temp_max: 295.95,
            pressure: 1016,
            humidity: 41,
            sea_level: 1016,
            grnd_level: 854,
        },
        visibility: 10000,
        wind: {
            speed: 2.37,
            deg: 246,
            gust: 1.6,
        },
        clouds: {
            all: 2,
        },
        dt: 1673686529,
        sys: {
            country: "YE",
            sunrise: 1673667181,
            sunset: 1673707936,
        },
        timezone: 10800,
        id: 73331,
        name: "Mafhaq",
        cod: 200,
    };

    return (
        <MainStyle>
            <Card
                title="Temperature"
                value={datas["main"]["temp"]}
                unit="°C"
                logo={}
            />
            <Card
                title="Humidité"
                value={datas["main"]["humidity"]}
                unit="%"
                logo={}
            />
            <Card
                title="Pression"
                value={datas["main"]["pressure"]}
                unit="%"
                logo={}
            />
            <Card
                title="Vent"
                value={datas["wind"]["speed"]}
                unit="%"
                logo={}
            />
        </MainStyle>
    );
};

export default Main;

const MainStyle = styled.main`
    max-width: 90vw;
    display: flex;
    justify-content: stretch;
    align-items: stretch;
`;
