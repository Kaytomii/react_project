import './App.css'
import {MyCity} from "./components/MyCity.tsx";
import type {MyCityType} from "./types/MyCityType.ts";
import type {BookType} from "./types/BookType.ts";
import {Book} from "./components/Book.tsx";

const mycity: MyCityType = {
    city_name: "Kharkov",
    country_name: "Ukraine",
    year: 1654
}
const book: BookType = {
    title: "Reverend Insanity",
    name_and_surname: "Gu Zhen Ren",
    janre: "Fantasy",
    pages_count: 2234

}

function App() {

  return (
      <>
        <h1>Hello React</h1>

          <MyCity city={mycity}></MyCity>
          <Book book={book} />
      </>
  );
}

export default App
