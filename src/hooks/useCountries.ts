import { useCallback, useEffect, useState } from "react";
import { ICountry, IRawCountry } from "../interfaces/country";
import { api } from "../services/api";

const formatCountry = (country: IRawCountry[]): ICountry[] => {
  return country.map((country) => {
    return {
      code: country.cca3,
      name: country.name.common,
      flag: country.flags.svg,
      population: new Intl.NumberFormat("en-us").format(country.population),
      region: country.region,
      capital: country.capital ? country.capital[0] : "Unknown",
    };
  });
};

export const useCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [loading, setLoading] = useState(false);

  const filterCountries = useCallback(({ region, name }: { region?: string; name?: string }) => {
    setLoading(true);
    api
      .get<IRawCountry[]>("/all")
      .then(({ data }) => {
        let newCountries = formatCountry(data);

        if (region) {
          newCountries = newCountries.filter((country) => {
            return country.region === region;
          });
        }

        if (name) {
          newCountries = newCountries.filter((country) => {
            return country.name.toLowerCase().includes(name.toLowerCase());
          });
        }

        setCountries(newCountries);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    api
      .get<IRawCountry[]>("/all")
      .then(({ data }) => {
        const newCountries = formatCountry(data);

        setCountries(newCountries);
      })
      .finally(() => setLoading(false));
  }, []);

  return { countries, loading, filterCountries };
};
