let url = window.location.toString().split('=')[1]

fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        let data = json;
        data = data[url]
        console.log(data)
        
        document.title = data["title"];
        document.querySelector('.title-project').innerHTML += "<h1>" + data["title"] + "</h1>";
        document.querySelector('.content-project .img-project').innerHTML += "<img class='img-shadow'src='" + data["image"] + "' alt='[alt]'></img>"
        document.querySelector('.content-project .text-project').innerHTML += "<p>" + data["description"] + "</p>" + "<p class='date'>" + data["year"] + "</p>" 
        document.querySelector('.link-project').innerHTML += "<a href=" + data["links"]["page"] + ">" + "Lien vers le projet" + "</a>" 
        document.querySelector('.link-project').innerHTML += "<a href=" + data["links"]["github"] + ">" + "Lien vers GitHub" + "</a>" 

        const toolsContainer = document.querySelector('.tools .container-tools');
        const toolsData = data["tools"];
        
        // Vérification existance de toolsdata
        if (toolsData) {
          // Vérification propriété 
          for (let i = 1; i <= 4; i++) {
            const toolKey = "tool" + i;
        
            // Vérification si la propriété existe avant de l'ajouter à la chaîne HTML
            if (toolsData[toolKey]) {
                    toolsContainer.innerHTML += "<p>" + toolsData[toolKey] + "</p>";
            }
          }
        }

        document.querySelector('.member').innerHTML += "<p class='name'>" + data["member"]["mb1"] + "</p>";
        // document.querySelector('.member').innerHTML += "<a href=" + data["member"]["mb1"] + ">" + data["member"]["mb1"] + "</a>";

        
        document.querySelector('.gallery').innerHTML += "<img class='img-gallery' src=" + data["gallery"]["img1"] + " alt='image projet'></img>" +  "<img class='img-gallery' src=" + data["gallery"]["img2"] + " alt='image projet'></img>" +  "<img class='img-gallery' src=" + data["gallery"]["img3"] + " alt='image projet'></img>"
        
        
        
    });