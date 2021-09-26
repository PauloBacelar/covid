import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import data from "./api/api";

function App() {
  const [timeline, setTimeline] = useState([]);
  const [vaccination, setVaccination] = useState([]);
  const [flags, setFlags] = useState([]);
  const [population, setPopulation] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let timeline = await data.getCountriesTimeline();
      setTimeline(timeline);

      let vaccination = await data.getVaccinationData();
      setVaccination(vaccination);

      let population = await data.getPopulations();
      setPopulation(population);

      setFlags(data.getCountriesFlags());
    };

    loadData();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div id="cases">
          <Section
            title="Cases by country"
            timeline={timeline}
            flags={flags}
            population={population}
            type="Cases"
          />
        </div>

        <div id="deaths">
          <Section
            title="Deaths by country"
            timeline={timeline}
            flags={flags}
            population={population}
            type="Deaths"
          />
        </div>

        <div id="vaccination">
          <Section
            title="Vaccination by country"
            timeline={vaccination}
            flags={flags}
            population={population}
            type="Doses"
          />
        </div>
      </main>
    </>
  );
}

export default App;
