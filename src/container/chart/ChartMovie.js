import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Chart.scss";
 
function ChartMovie({ rank, movieNm }) {
  return (
    <div className="Movie">
      <h5>
        {rank}위:{movieNm}
      </h5>
    </div>
  );
}
 
ChartMovie.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired
};
 
export default ChartMovie;