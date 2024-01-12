import React from "react";

const test = () => {
  return (
    <div>
      <div
        id="wg-api-football-standings"
        data-host="v3.football.api-sports.io"
        data-key="2d9757ee3f581e21c863a58a1e326d3b"
        data-league="39"
        data-team=""
        data-season="2021"
        data-theme=""
        data-show-errors="false"
        data-show-logos="true"
        className="w-1/2 wg_loader"
      ></div>
      <script
        type="module"
        src="https://widgets.api-sports.io/2.0.3/widgets.js"
      ></script>

      {/* <div
        id="wg-api-football-standings"
        data-host="v3.football.api-sports.io"
        data-key="2d9757ee3f581e21c863a58a1e326d3b"
        data-league="4"
        data-team="4"
        data-season="2040"
        data-theme=""
        data-show-errors="true"
        data-show-logos="true"
        className="wg_loader"
      ></div>
      <script
        type="module"
        src="https://widgets.api-sports.io/2.0.3/widgets.js"
      ></script> */}
    </div>
  );
};

export default test;
