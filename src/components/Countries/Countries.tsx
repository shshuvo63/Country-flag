import type { CountryType } from "../../type";
import { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

export interface CountriesProps {
    countriesPromise: Promise<CountryType[]>;
}

export default function Countries({ countriesPromise }: CountriesProps) {

    const [visitedCountries, setVisitedCountries] = useState<CountryType[]>([]);

    const countries = use(countriesPromise);

    const handleVisitedCountry = (country: CountryType): void => {

        const alreadyVisited = visitedCountries.some(
            visitedCountry => visitedCountry.ccn3.ccn3 === country.ccn3.ccn3
        );

        if (alreadyVisited) {

            // Remove country
            const newVisitedCountries = visitedCountries.filter(
                visitedCountry => visitedCountry.ccn3.ccn3 !== country.ccn3.ccn3
            );

            setVisitedCountries(newVisitedCountries);

        } else {

            // Add country
            setVisitedCountries([...visitedCountries, country]);
        }
    };

    return (
        <div>
            <h2>Countries: {countries.length}</h2>

            <h4>
                Visited Countries: {visitedCountries.length}
            </h4>

            <div className="countries">
                {countries.map(country => (
                    <Country
                        key={country.ccn3.ccn3}
                        country={country}
                        handleVisited={handleVisitedCountry}
                    />
                ))}
            </div>
        </div>
    );
}