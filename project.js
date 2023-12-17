let url = window.location.toString().split('=')[1]

fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        let data = json;
        data = data[url]
        console.log(data)
        // document.querySelector('title').innerHTML = data[key].titre;
        document.querySelector('.title-project').innerHTML += "<h1>" + data["titre"] + "</h1>";
        document.querySelector('.content-project .img-project').innerHTML += "<img src='" + data["image"] + "' alt='[alt]'>"
        document.querySelector('.content-project .text-project').innerHTML += "<p>" + data["description"] + "</p>" + "<p class='date'>" + data["year"] + "</p>" 
        document.querySelector('.link-project').innerHTML += "<a href=" + data["links"]["page"] + ">" + "Lien vers le projet" + "</a>" 
        document.querySelector('.link-project').innerHTML += "<a href=" + data["links"]["github"] + ">" + "Lien vers GitHub" + "</a>" 
        for (const i in data["technos"]) {
                const techno = data["technos"][i];
                const lien_techno = data["lien"][i];
                console.log(lien_techno)
                document.querySelector('.technos').innerHTML += "<a href=" + lien + "><img src=" + data["technos"] + " alt='image techno'></a><br>"
        }
        
        
    });