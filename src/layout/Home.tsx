import React from "react";
import WeatherResults from ".@/components/weatherResults/WeatherResults";
import WeatherSearch from ".@/components/weatherSearch/WeatherSearch";

const FirstPage = () => {
  // TODO remove static data once api is running and postman is implemented
  const resultActual = {
    type: "FeatureCollection",
    query: ["london"],
    features: [
      {
        id: "place.6957135",
        type: "Feature",
        place_type: ["place"],
        relevance: 1,
        properties: { wikidata: "Q84" },
        text: "London",
        place_name: "London, Greater London, England, United Kingdom",
        bbox: [-0.351708, 51.384527, 0.153177, 51.669993],
        center: [-0.127647, 51.507322],
        geometry: { type: "Point", coordinates: [-0.127647, 51.507322] },
        context: [
          { id: "district.591439", wikidata: "Q23306", text: "Greater London" },
          {
            id: "region.9295",
            short_code: "GB-ENG",
            wikidata: "Q21",
            text: "England",
          },
          {
            id: "country.8783",
            short_code: "gb",
            wikidata: "Q145",
            text: "United Kingdom",
          },
        ],
      },
    ],
  };

  const otherActualResult = {
    request: {
      type: "LatLon",
      query: "Lat 51.51 and Lon -0.13",
      language: "en",
      unit: "m",
    },
    location: {
      name: "Strand",
      country: "United Kingdom",
      region: "Westminster, Greater London",
      lat: "51.508",
      lon: "-0.121",
      timezone_id: "Europe/London",
      localtime: "2022-10-06 13:20",
      localtime_epoch: 1665062400,
      utc_offset: "1.0",
    },
    current: {
      observation_time: "12:20 PM",
      temperature: 17,
      weather_code: 116,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
      ],
      weather_descriptions: ["Partly cloudy"],
      wind_speed: 30,
      wind_degree: 230,
      wind_dir: "SW",
      pressure: 1029,
      precip: 0,
      humidity: 59,
      cloudcover: 50,
      feelslike: 17,
      uv_index: 5,
      visibility: 10,
      is_day: "yes",
    },
  };

  const results = [
    {
      submitSearchTerm: "London",
      temperature: 17,
      feelslike: 17,
      weatherDescription: ["cloudy"],
      placeName: "Somewhere",
    },
    {
      submitSearchTerm: "Summer",
      temperature: 17,
      feelslike: 17,
      weatherDescription: ["cloudy"],
      placeName: "Somewhere",
    },
    {
      submitSearchTerm: "Delter",
      temperature: 21,
      feelslike: 24,
      weatherDescription: ["sunny"],
      placeName: "Somewhere else",
    },
  ];

  const resultsEmpty = [];

  return (
    <>
      <div className="PageIntro">
        <h3>About</h3>
        <p>
          Welcome to this website. The purpose if this site is to allow user to
          search the weather. It can be very helpful to know if it is raining
          without looking outside of a window. It can be even more helpful
          knowing if it raining cats and down on the other side of the world.
          Please go to the weather section and provide a location to discover
          what awaits outside. If you need any help please visit our help
          section.
        </p>
      </div>
      <div className="PageDetail">
        <p>Search coming soon</p>
        <WeatherSearch />
        <WeatherResults results={resultsEmpty} />
      </div>
    </>
  );
};

export default FirstPage;
