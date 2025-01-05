//Retrieve User Favorite clothings 
document.addEventListener('DOMContentLoaded', function(){
  console.log("Im in the route" );
  return fetch(
    `/hardware`,
    { method: "GET" },
    { headers: { "Content-Type": "Application/JSON" } }
  ).then(async function (body) {
      const data = await body.json();
      console.log("MY RESPONSE:")
      console.log(data.length)
      
      const container = document.querySelector("#mainbodydivbodytablebody")
      
      for(let i = 0; i < data.length; i++ ){
        const tablerow = document.createElement('tr')
        const tableheadcategory = document.createElement('td')
        const tableheadtopic = document.createElement('td')
        const tableheaddescriptionbody = document.createElement('td')
        const tableheaddescription = document.createElement('div')
        const tableheadlastupdated = document.createElement('td')
        const tableheadlastupdatedButton = document.createElement('button')
        tableheadlastupdatedButton.id = "Viewbutton"
        tableheadlastupdatedButton.type = "button"
        tableheadlastupdatedButton.textContent = "View more"
        
        tablerow.classList = `mainbodydivbodytablebody${data[i].ID}`
        tablerow.id = 'mainbodydivbodytablebodychild'
        tableheaddescription.id = "description"
        tableheaddescription.textContent = data[i].Description
        tableheadcategory.textContent = data[i].Category
        tableheadtopic.textContent = data[i].Topic
        tableheadlastupdated.textContent = data[i].Lastupdated.slice(0, 10)
        tableheadlastupdated.appendChild(tableheadlastupdatedButton)
        tableheaddescriptionbody.appendChild(tableheaddescription)
        tablerow.appendChild(tableheadcategory)
        tablerow.appendChild(tableheadtopic)
        tablerow.appendChild(tableheaddescriptionbody)
        tablerow.appendChild(tableheadlastupdated)

        container.appendChild(tablerow)

        tableheadlastupdatedButton.addEventListener('click', function() {

          if(tableheadlastupdatedButton.textContent == "close"){

            tableheaddescription.style.removeProperty("height");  // Original height
            tableheaddescription.style.overflow = "hidden";
            tableheaddescription.style.textOverflow = 'ellipsis';
            tableheaddescription.style.whiteSpace = 'nowrap';
            tableheadlastupdatedButton.textContent = 'View more';
          }else {
            tableheaddescription.style.height = "10em"
            tableheaddescription.style.overflow = "visible"
            tableheaddescription.style.textOverflow = 'clip';
            tableheaddescription.style.whiteSpace = 'normal'
            tableheadlastupdatedButton.textContent = 'close'
          }

        })

        
       /*  const Category = document.createElement('p')
        Category.id = "Category"
        Category.textContent = data[i].Category
        const Topic = document.createElement('p')
        Topic.id = "Topic"
        Topic.textContent = data[i].Resolution
        const LastUpdated = document.createElement('p')
        LastUpdated.id = "LastUpdated"
        LastUpdated.textContent = data[i].Lastupdated.slice(0, 10)
  
  
        Bodytext.appendChild(Category)
        Bodytext.appendChild(Topic)
        Bodytext.appendChild(LastUpdated)
  
        container.appendChild(Bodytext)
        */
      }


    return data
  });


})

function TestingRoute() {
    alert('Hello')
  }


