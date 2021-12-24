import NextLink from "next/link";
import NextImage from "next/image";
import { GetServerSideProps } from "next";
import { MdArrowBack } from "react-icons/md";
import { useCountry } from "../hooks/useCountry";

interface DetailProps {
  code: string;
}

export default function Detail({ code }: DetailProps) {
  const { country } = useCountry(code);

  return (
    <section className="max-w-7xl w-full mx-auto px-3 mt-14">
      <div className="mb-10">
        <NextLink href="/">
          <button className="dark:bg-gray-800 bg-gray-200 flex items-center gap-2 px-6 py-2 rounded-md shadow-sm shadow-black">
            <MdArrowBack />
            Back
          </button>
        </NextLink>
      </div>

      {country && (
        <div className="flex justify-between items-center flex-col md:flex-row pb-4">
          <div className="w-full max-w-lg px-4">
            <NextImage src={country.flag} alt={"Brazil"} layout="responsive" objectFit="cover" width={150} height={100} />
          </div>

          <div className="max-w-xl w-full px-4">
            <div className="flex flex-col py-10 gap-6">
              <h2 className="text-4xl font-bold">{country.name}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p>
                    Native Name: <span className="text-gray-400">{country.nativeName}</span>
                  </p>
                  <p>
                    Population: <span className="text-gray-400">{country.population}</span>
                  </p>
                  <p>
                    Region: <span className="text-gray-400">{country.region}</span>
                  </p>
                  <p>
                    Sub Region: <span className="text-gray-400">{country.subregion}</span>
                  </p>
                  <p>
                    Capital: <span className="text-gray-400">{country.capital}</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <p>
                    Top Level Domain: <span className="text-gray-400">{country.topLevelDomain.join(", ")}</span>
                  </p>
                  <p>
                    Currencies: <span className="text-gray-400">{country.currencies.join(", ")}</span>
                  </p>
                  <p>
                    Languages: <span className="text-gray-400">{country.languages.join(", ")}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="text-sm mt-2">
              Border Countries:
              <div className="flex flex-wrap gap-2 mt-2">
                {country.borderCountries?.map((border) => (
                  <NextLink key={border} href={`/${border}`}>
                    <span className="inline-block text-gray-400 bg-gray-800 py-1 px-4 rounded-md shadow shadow-black cursor-pointer hover:brightness-110">
                      {border}
                    </span>
                  </NextLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const code = params?.code as string;

  return {
    props: {
      code,
    },
  };
};
