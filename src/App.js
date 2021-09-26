import "./App.css";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import data from "./api/api";
import Loader from "react-loader-spinner";
import Footer from "./components/Footer";

function App() {
  const [timeline, setTimeline] = useState([]);
  const [vaccination, setVaccination] = useState([]);
  const [flags, setFlags] = useState([]);
  const [population, setPopulation] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      let timeline = await data.getCountriesTimeline();
      setTimeline(timeline);

      setLoaded(true);

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
      {loaded && (
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
      )}
      {!loaded && (
        <main className="loader">
          <Loader type="TailSpin" color="#6feb7a" height={100} width={100} />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
