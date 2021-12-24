import { useCallback, useEffect, useState } from "react";
import { ICountry, IRawCountry } from "../interfaces/country";
import { api } from "../services/api";

const formatCountry = (country: ISingleRawCountry[]): ISingleCountry[] => {
  return country.map((country) => {
    return {
      code: country.cca3,
      name: country.name.common,
      flag: country.flags.svg,
      population: new Intl.NumberFormat("en-us").format(country.population),
      region: country.region,
      subregion: country.subregion,
      capital: country.capital ? country.capital[0] : "Unknown",
      borderCountries: country!.borders || ["Unknown"],
      currencies: Object.keys(country!.currencies).map((key) => `${key} - ${country!.currencies[key].name}`),
      languages: Object.keys(country!.languages).map((key) => country!.languages[key]),
      topLevelDomain: country!.tld as string[],
      nativeName: country!.altSpellings[1] || "",
    };
  });
};

interface ISingleCountry extends ICountry {
  subregion: string;
  borderCountries: string[];
  languages: string[];
  currencies: string[];
  topLevelDomain: string[];
  nativeName: string;
}

interface ISingleRawCountry extends IRawCountry {
  subregion: string;
  borders: string[];
  altSpellings: string[];
  languages: {
    [key: string]: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  tld: string[];
}

export const useCountry = (cca3: string) => {
  const [country, setCountry] = useState<ISingleCountry>();

  const getCountry = useCallback((cca3: string) => {
    api
      .get<ISingleRawCountry[]>(`/alpha/${cca3}`)
      .then(({ data }) => {
        const [country] = formatCountry(data);

        setCountry(country);
      })
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    getCountry(cca3);
  }, [cca3, getCountry]);

  return { country };
};
