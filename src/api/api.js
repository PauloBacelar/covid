const BASE_URL = "https://disease.sh/v3/";
const countries = {
  ar: "argentina",
  au: "australia",
  bd: "bangladesh",
  br: "brazil",
  ca: "canada",
  cn: "china",
  cd: "congo",
  eg: "egypt",
  et: "ethiopia",
  fr: "france",
  de: "germany",
  in: "india",
  id: "indonesia",
  ir: "iran",
  it: "italy",
  jp: "japan",
  mx: "mexico",
  nl: "netherlands",
  ng: "nigeria",
  pk: "pakistan",
  ph: "philippines",
  ru: "russia",
  sa: "saudi arabia",
  za: "south africa",
  kr: "s. korea",
  es: "spain",
  ch: "switzerland",
  th: "thailand",
  tr: "turkey",
  gb: "uk",
  us: "usa",
  vn: "vietnam",
};

const fetchData = async (endpoint) => {
  const request = await fetch(`${BASE_URL}${endpoint}`);
  const json = await request.json();
  return json;
};

const data = {
  getCountriesTimeline: async () => {
    return await fetchData(
      `covid-19/historical/${Object.keys(countries).join(",")}?lastdays=all`
    );
  },
  getCountriesFlags: () => {
    const flags = Object.keys(countries).map((country) => {
      return `https://flagcdn.com/20x15/${country}.png`;
    });

    return flags;
  },
  getPopulations: async () => {
    const request = await fetch("https://restcountries.com/v2/all");
    const json = await request.json();
    const data = [];

    json.forEach((country) => {
      if (Object.keys(countries).includes(country.alpha2Code.toLowerCase())) {
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
      if (Object.values(countries).includes(country.country.toLowerCase())) {
        data.push(country);
      }
    });

    return data;
  },
};

export default data;
