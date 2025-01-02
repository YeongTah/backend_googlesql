//Retrieve User Favorite clothings
function TestingRoute() {
    console.log("Im in the route" );
    return fetch(
      `/hardware`,
      { method: "GET" },
      { headers: { "Content-Type": "Application/JSON" } }
    ).then(async function (body) {
        const data = await body.json();
        console.log("MY RESPONSE:")
        console.log(data)
        console.log(data[0].Lastupdated.slice(0,10))

        const container = document.querySelector("#container")
        const TestMsg = document.createElement('p')
        TestMsg.innerHTML  = 
        `
        Resolution: ${data[0].Resolution} <br>
        Category: ${data[0].Category} <br>
        Last Updated: ${data[0].Lastupdated.slice(0, 10)} <br>
        
        `
        container.appendChild(TestMsg)

      return data
    });
  }


