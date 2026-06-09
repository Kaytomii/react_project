import type {MyCityType} from "../types/MyCityType.ts";

import MyPhoto_1 from '../images/for_hw1.jpg';
import MyPhoto_2 from '../images/for_hw2.jpg';

function MyCity(prop: {city:MyCityType}) {
    return (
        <p>City Name: {prop.city.city_name},
            <b>Country Name: {prop.city.country_name}</b>
            <p>Year: {prop.city.year}</p>
            <img src={MyPhoto_1}></img>
            <img src={MyPhoto_2}></img>
        </p>
    )
}
export { MyCity };