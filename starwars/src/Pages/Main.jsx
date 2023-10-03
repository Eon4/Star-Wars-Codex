import { useQuery } from "@tanstack/react-query";
import { request } from "graphql-request";
import { getFilms } from "../Query/getFilms";
import Popup from 'reactjs-popup';
import React from "react";
import style from '../Style/main.module.scss'
import PuffLoader from "react-spinners/PuffLoader";


export const Main = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["getStarwarsFilm"],
    queryFn: async () =>
      request(
        "https://swapi-graphql.netlify.app/.netlify/functions/index",
        getFilms
      ),
  });

  console.log("Data", data);

  if (isLoading) {
    return <PuffLoader className={style.loader} color="#25ac0d" />;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className={style.container}> {/* Use the container class from the CSS module */}
      <h1>The World of Star Wars Movies</h1>
      <ul>
        {data.allFilms.films.map((item, index) => (
          <React.Fragment key={index}>
            <Popup trigger={<button>{item.title}</button>}>
              <div className={style.modal}>
                <h2>{item.title}</h2>
                <p className={style.para}>Release Date: {item.releaseDate}</p>
                <p className={style.para}>Director: {item.director}</p>
              </div>
            </Popup>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
