async function loadCrimeData(){

    const container =
      document.getElementById("crimeData");

    try{

        const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true"
        );

        const data = await res.json();

        container.innerHTML = `
            <h2>Delhi Live Weather</h2>
            <p>
              Temperature:
              ${data.current_weather.temperature}°C
            </p>

            <p>
              Wind Speed:
              ${data.current_weather.windspeed}
            </p>

            <p>
              Updated:
              ${new Date().toLocaleTimeString()}
            </p>
        `;

    }
    catch(err){

        container.innerHTML =
          "Unable to load live data";

    }

}

loadCrimeData();

setInterval(loadCrimeData,60000);