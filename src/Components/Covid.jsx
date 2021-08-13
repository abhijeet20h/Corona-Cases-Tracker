import React, { useEffect, useState } from "react";

function Covid() {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
  <h1 className="heading m-2"> <marquee>  🛑Live</marquee> </h1>
      <h2 className="heading-style "> COVID - 19 CORONA VIRUS TRACKER</h2>

      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="card c1">
              <div className="card_info c1">
                <p className="card_title c1">
                  <span className="card_category c1">Our</span> COUNTRY
                </p>

                <h3 className="card_title m-4 c1">INDIA</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card c2">
              <div className="card_info c2">
                <p className="card_title c2">
                  <span className="card_category c2">TOTAL</span> RECOVERED
                </p>

                <h3 className="card_title m-4 c2">{data.recovered}</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card c3">
              <div className="card_info c3">
                <p className="card_title c3">
                  <span className="card_category c3">TOTAL</span> CONFIRMED
                </p>

                <h3 className="card_title m-4 c3">{data.confirmed}</h3>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <div className="card c4">
              <div className="card_info c4">
                <p className="card_title c4">
                  <span className="card_category c4">TOTAL</span> DEATH
                </p>

                <h3 className="card_title c4 m-4">{data.deaths}</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card c5">
              <div className="card_info c5">
                <p className="card_title c5">
                  <span className="card_category c5">TOTAL</span> ACTIVE
                </p>

                <h3 className="card_title c5 m-4">{data.active}</h3>
              </div>
            </div>{" "}
          </div>
          <div class="col-sm">
            <div className="card c6">
              <div className="card_info c6">
                <p className="card_title c6">
                  <span className="card_category c6" >Our</span> UPDATED
                </p>

                <h3 className="card_title m-4 c6">{data.lastupdatedtime}</h3>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}




export default Covid;
