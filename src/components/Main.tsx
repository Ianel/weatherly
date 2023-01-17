import React from "react";
import styled from "styled-components";
import { useSnapshot } from "valtio";
import { states } from "../states";
import Card from "./Card";

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
                <h2 className="no-results">Aucun résultat</h2>
            ) : (
                <>
                    {" "}
                    {loading ? (
                        <div className="loader">Chargement...</div>
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

    .loader,
    .no-results {
        height: 50vh;
        display: flex;
        align-items: center;
        font-size: 2rem;
        font-weight: 700;
    }
`;
