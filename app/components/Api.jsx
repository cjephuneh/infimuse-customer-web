import React from "react";

const Api = () => {
  return (
    <>
      <div
        id="wg-api-football-standings"
        data-host="v3.football.api-sports.io"
        data-key="Your-Api-Key-Here"
        data-league=""
        data-team=""
        data-season=""
        data-theme=""
        data-show-errors="false"
        data-show-logos="true"
        class="wg_loader"
      ></div>
      <script
        type="module"
        src="https://widgets.api-sports.io/2.0.3/widgets.js"
      ></script>
    </>
  );
};

export default Api;
