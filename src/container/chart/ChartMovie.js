import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Chart.scss";
 
function ChartMovie({ rank, movieNm }) {
  return (
    <div className="Movie">
      <h1>
        {rank}위:{movieNm}
      </h1>
    </div>
  );
}
 
ChartMovie.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired
};
 
export default ChartMovie;