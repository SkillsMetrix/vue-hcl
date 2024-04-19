/* Weather Results Styling
**************************/
.weather-results-container {
  margin: auto;
  display: flex;
  flex-direction: column;
}

.weather-results-data {
  display: flex;
  flex-direction: row;
}

.weather-results-summary, .weather-results-temperatures {
  margin: 0 10px;
  padding: 10px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 6px 8px rgba(102,119,136,.03), 0 1px 2px rgba(102,119,136,.3);
}

.weather-results-temperatures {
  padding: 10px 40px;
}

.weather-title {
  margin-bottom: 0.5em;
}

.weather-title h2 {
  text-align: center;
  color: #745fb5;
  white-space: nowrap;
  overflow: hidden;
}

.weather-results-buttons {
  margin: auto;
}

.weather-results-buttons button {
  background-color: blue;
  color: white;
  padding: 8px 16px;
  text-align: center;
  font-size: 1em;
  border-radius: 8px;
  border: none;
  margin: 6px;
}

.weather-results-buttons button:hover {
  color: black;
  cursor: pointer;
}
