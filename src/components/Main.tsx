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

    const capitalize = (word: string) => {
        return `${word.split(" ")[0][0].toUpperCase()}${word.slice(
            1,
            word.length
        )}`;
    };

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
                        <div>
                            <h2 className="description">
                                {capitalize(
                                    weatherInfos["weather"][0]["description"]
                                )}
                            </h2>
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
                                    unit="hPa"
                                />
                                <Card
                                    title="Vent"
                                    value={weatherInfos["wind"]["speed"]}
                                    unit="m/s"
                                />
                            </div>
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
    font-family: "Roboto";

    .description {
        text-align: center;
    }

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

    @media screen and (max-width: 996px) {
        .no-results,
        .loader {
            font-size: 1.75rem;
        }
    }

    @media screen and (max-width: 596px) {
        margin: auto 2rem;

        .card-container {
            margin-bottom: 2rem;
        }

        .no-results,
        .loader {
            font-size: 1.25rem;
        }
    }
`;
