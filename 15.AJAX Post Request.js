function sendPostRequest() {
  const url = "https://api.example.com/submit";
  const payload = {
    name: "John Doe",
    email: "johndoe@example.com",
  };

  axios
    .post(url, payload)
    .then(function (response) {
      // Request successful
      console.log("Post request successful:", response.data);
    })
    .catch(function (error) {
      // Request failed
      console.error("Post request failed. Error:", error);
    });
}
