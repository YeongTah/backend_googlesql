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
        const tableheadlastupdatedButtonIcon =  document.createElement('i')
        const tableheadlastupdatedButton = document.createElement('button')
        const tableheaddeletebutton = document.createElement('i')
        tableheadlastupdatedButton.id = "Viewbutton"
        tableheadlastupdatedButton.type = "button"
        tableheadlastupdatedButtonIcon.id = "Viewbutton"
        tableheaddeletebutton.id = "Delbutton"
        tablerow.classList = `mainbodydivbodytablebody${data[i].Resolution_ID}`
        tablerow.id = 'mainbodydivbodytablebodychild'
        tableheaddescription.id = "description"
        tableheaddescription.textContent = data[i].Description
        tableheadcategory.textContent = data[i].Category
        tableheadtopic.textContent = data[i].Topic
        tableheadlastupdated.textContent = data[i].Lastupdated.slice(0, 10)
        tableheadlastupdatedButtonIcon.classList.add('fa', 'fa-plus' , 'fa-lg')
        tableheaddeletebutton.classList.add('fa','fa-trash-o' , 'fa-lg')


        tableheadlastupdatedButton.appendChild(tableheadlastupdatedButtonIcon)
        tableheadlastupdated.appendChild(tableheadlastupdatedButtonIcon)
        tableheaddescriptionbody.appendChild(tableheaddescription)
        tablerow.appendChild(tableheadcategory)
        tablerow.appendChild(tableheadtopic)
        tablerow.appendChild(tableheaddescriptionbody)
        tablerow.appendChild(tableheadlastupdated)

     

        tableheadlastupdatedButtonIcon.addEventListener('click', function() {

          if(tableheadlastupdatedButton.textContent == "close"){

            tableheaddescription.style.removeProperty("height");  // Original height
            tableheaddescription.style.overflow = "hidden";
            tableheaddescription.style.textOverflow = 'ellipsis';
            tableheaddescription.style.whiteSpace = 'nowrap';
            tableheadlastupdatedButton.textContent = 'View more';
            tableheaddeletebutton.style.display = 'none';
          }else {
            tableheaddescription.style.height = "10em"
            tableheaddescription.style.overflow = "visible"
            tableheaddescription.style.textOverflow = 'clip';
            tableheaddescription.style.whiteSpace = 'normal'
            tableheadlastupdatedButton.textContent = 'close'
            tableheaddeletebutton.style.display = '';
            tableheadlastupdated.appendChild(tableheaddeletebutton)
          }

        })

        tableheaddeletebutton.addEventListener('click', function() {

          const response = confirm('Do you want to proceed to delete?')
          if (response) {

         
             
             const resolutionId = data[i].Resolution_ID
             console.log("this is ID"+resolutionId)
             const url = `http://localhost:3000/delete-ticket/${resolutionId}`;

            fetch(url, {
              method: 'DELETE'
            }).then(body => {

              if(!body.ok){
                throw new Error(`Failed to delete Resolution ID ${resolutionId}: ${fetchResponse.statusText}`);
              }
              return body.json(); // Parse the response, if it's JSON

            }).then(deletedData => {
              console.log(`Resolution ID ${resolutionId} deleted successfully.`);
              console.log('API Response:', deletedData);
          }) .catch(error => {
            console.error(`Error deleting Resolution ID ${resolutionId}:`, error);
        });
        alert('Deleted successfully')
        window.location.reload();
        
          } else {
            
          }
        })
        container.appendChild(tablerow)
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


