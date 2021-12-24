import NextLink from "next/link";
import NextImage from "next/image";
import { ICountry } from "../../interfaces/country";

interface CountryProps {
  country: ICountry;
}

export const Country = ({ country }: CountryProps) => {
  return (
    <NextLink href={`/${country.name}`}>
      <div className="dark:bg-gray-800 bg-gray-200 shadow shadow-dark rounded-md overflow-hidden cursor-pointer scale-90 hover:scale-100 transition-all">
        <NextImage layout="responsive" src={country.flag} alt={country.name} objectFit="cover" height={100} width={150} />

        <div className="p-7 space-y-1">
          <h2 className="text-2xl font-bold pb-3">{country.name}</h2>
          <p>
            Population: <span className="text-gray-600 dark:text-gray-400">{country.population}</span>
          </p>
          <p>
            Region: <span className="text-gray-600 dark:text-gray-400">{country.region}</span>
          </p>
          <p>
            Capital: <span className="text-gray-600 dark:text-gray-400">{country.capital}</span>
          </p>
        </div>
      </div>
    </NextLink>
  );
};
