function App() {
  var myHeaders = new Headers();
  myHeaders.append("x-rapidapi-key", "2b0e52bae0c0f1d318ed22c205fe264a");
  myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io");

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch("https://v3.football.api-sports.io/status", requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

  return <div className="App">Hello React</div>;
}

export default App;
