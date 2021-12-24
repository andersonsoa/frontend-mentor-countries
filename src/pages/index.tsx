import type { NextPage } from "next";
import { FormEvent } from "react";
import { MdSearch } from "react-icons/md";
import { Countries } from "../components/Countries";
import { Country } from "../components/Country";
import { useCountries } from "../hooks/useCountries";

const Home: NextPage = () => {
  const { countries, filterCountries } = useCountries();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("searching");

    const form = new FormData(e.currentTarget);

    const name = form.get("name") as string;
    const region = form.get("region") as string;

    filterCountries({ region, name });
  };

  return (
    <main className="max-w-7xl w-full mx-auto px-3 mt-14">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 justify-between">
        <div className="dark:bg-gray-800 bg-gray-200 flex items-center gap-4 px-4 py-3 rounded-md max-w-md w-full">
          <button type="submit">
            <MdSearch size={20} />
          </button>
          <input name="name" className="bg-transparent outline-none w-full" type="text" placeholder="Search for a country..." />
        </div>

        <div>
          <input
            name="region"
            list="regions"
            className="dark:bg-gray-800 bg-gray-200 px-4 py-3 rounded-md outline-none max-w-md w-full"
            placeholder="Find by region"
          />
          <datalist id="regions">
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </datalist>
        </div>
      </form>

      <Countries>
        {countries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </Countries>
    </main>
  );
};

export default Home;
