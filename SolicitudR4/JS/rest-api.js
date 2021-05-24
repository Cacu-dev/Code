function getMetodo() {
    $.ajax({
      url: "https://api.weatherstack.com/current",
      data: {
        access_key: "b2e33650ed9449887af6539871f999c9",
        query: "New York",
      },
      dataType: "json",
        success: function (apiResponse) {
          
        console.log(
          `La temperatura actual en $ {apiResponse.location.name} es $ {apiResponse.current.temperature} ℃`
        );
      },
    });
}