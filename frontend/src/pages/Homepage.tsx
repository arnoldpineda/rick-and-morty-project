import CardGrid from "../components/Card/CardGrid";
import Filters from "../components/Filters/Filters";
import { characters } from "../mocks/characters";

function Homepage() {
  return (
    <>
      <Filters />
      <CardGrid cards={characters} />;
    </>
  );
}

export default Homepage;
