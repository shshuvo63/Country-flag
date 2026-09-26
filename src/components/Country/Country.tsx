import { useState } from "react";
import type { CountryType } from "../../type";
import "./country.css";

export interface CountryProps {
    country: CountryType;
    handleVisited: (country: CountryType) => void;
}

export default function Country({ country, handleVisited }: CountryProps) {

    const [visited, setVisited] = useState<boolean>(false);

    const handleClick = () => {
        setVisited(!visited);
        handleVisited(country);
    };

    return (
        <div className={`country ${visited ? "country-visited" : ""}`}>
            <h3>{country.name.common}</h3>

            <img
                src={country.flags.flags.png}
                alt={country.flags.flags.alt}
            />

            <p>Capital: </p>

            <button onClick={handleClick}>
                {visited ? "Visited" : "Mark as Visited"}
            </button>
        </div>
    );
}