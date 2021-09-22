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
};

export default data;
