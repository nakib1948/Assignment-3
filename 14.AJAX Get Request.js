function sendGetRequest() {
    const url = "https://api.example.com/data";
  
    axios.get(url)
      .then(function (response) {
        // Request successful
        console.log(response.data);
      })
      .catch(function (error) {
        // Request failed
        console.error("Request failed. Error:", error);
      });
  }
  