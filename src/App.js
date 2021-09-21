import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import data from "./api/api";

function App() {
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      let timeline = await data.getCountriesTimeline();
      setTimeline(timeline);
      console.log(timeline);
    };

    loadData();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
    </>
  );
}

export default App;
