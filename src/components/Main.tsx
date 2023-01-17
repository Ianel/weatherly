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
                        <div className="card-container">
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
                        </div>
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
    flex-direction: row;
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

    .card-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        justify-content: center;
    }

    @media screen and (max-width: 596px) {
        margin: auto 2rem;

        .card-container {
            margin-bottom: 2rem;
        }
    }
`;
