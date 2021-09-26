const BASE_URL = "https://disease.sh/v3/";
const countries = [
  "ar",
  "au",
  "br",
  "ca",
  "cn",
  "fr",
  "de",
  "in",
  "id",
  "it",
  "jp",
  "kr",
  "mx",
  "ru",
  "sa",
  "za",
  "tr",
  "gb",
  "us",
];
const countriesFullName = [
  "argentina",
  "australia",
  "brazil",
  "canada",
  "china",
  "france",
  "germany",
  "india",
  "indonesia",
  "italy",
  "japan",
  "s. korea",
  "mexico",
  "russia",
  "saudi arabia",
  "south africa",
  "turkey",
  "uk",
  "usa",
];

const fetchData = async (endpoint) => {
  const request = await fetch(`${BASE_URL}${endpoint}`);
  const json = await request.json();
  return json;
};

const data = {
  getCountriesTimeline: async () => {
    return await fetchData(
      `covid-19/historical/${countries.join(",")}?lastdays=all`
    );
  },
  getCountriesFlags: () => {
    const flags = countries.map((country) => {
      return `https://flagcdn.com/20x15/${country}.png`;
    });

    return flags;
  },
  getPopulations: async () => {
    const request = await fetch("https://restcountries.com/v2/all");
    const json = await request.json();
    const data = [];

    json.forEach((country) => {
      if (countries.includes(country.alpha2Code.toLowerCase())) {
        data.push(country.population);
      }
    });

    return data;
  },
  getVaccinationData: async () => {
    const timeline = await fetchData(
      `covid-19/vaccine/coverage/countries?lastdays=all`
    );

    const data = [];
    timeline.forEach((country) => {
      if (countriesFullName.includes(country.country.toLowerCase())) {
        data.push(country);
      }
    });

    return data;
  },
};

data.getVaccinationData();

export default data;
