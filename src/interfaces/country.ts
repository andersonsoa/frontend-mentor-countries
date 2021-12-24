export interface IRawCountry {
  name: {
    common: string;
    official: string;
  };
  flags: {
    png: string;
    svg: string;
  };
  population: number;
  region: string;
  capital?: string[];
}

export interface ICountry {
  name: string;
  flag: string;
  population: string;
  region: string;
  capital: string;
}
