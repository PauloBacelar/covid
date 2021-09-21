import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { useEffect, useState } from "react";
import data from "./api/api";

function App() {
  const [timeline, setTimeline] = useState([]);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let timeline = await data.getCountriesTimeline();
      setTimeline(timeline);

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
        <Section title="Cases by country" />
      </main>
    </>
  );
}

export default App;
