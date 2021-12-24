interface CountriesProps {
  children: React.ReactNode;
}

export const Countries = ({ children }: CountriesProps) => {
  return <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-14 gap-2">{children}</div>;
};
