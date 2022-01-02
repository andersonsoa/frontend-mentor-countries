import NextLink from "next/link";
import NextImage from "next/image";
import { ICountry } from "../../interfaces/country";
import { motion } from "framer-motion";

interface CountryProps {
  country: ICountry;
}

export const Country = ({ country }: CountryProps) => {
  return (
    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
      <NextLink href={`/${country.code}`}>
        <div className="dark:bg-gray-800 bg-gray-200 shadow shadow-dark rounded-md overflow-hidden cursor-pointer scale-90 hover:scale-100 transition-all h-full">
          <NextImage layout="responsive" src={country.flag} alt={country.name} objectFit="cover" height={100} width={150} />

          <div className="p-4 space-y-1">
            <h2 className="text-lg font-bold pb-3">{country.name}</h2>
            <p className="text-sm">
              Population: <span className="text-gray-600 dark:text-gray-400">{country.population}</span>
            </p>
            <p className="text-sm">
              Region: <span className="text-gray-600 dark:text-gray-400">{country.region}</span>
            </p>
            <p className="text-sm">
              Capital: <span className="text-gray-600 dark:text-gray-400">{country.capital}</span>
            </p>
          </div>
        </div>
      </NextLink>
    </motion.div>
  );
};
