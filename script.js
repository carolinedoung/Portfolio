
// burger menu navbar

const burgerMenu = document.querySelector(".burger-menu")
const navLinks = document.querySelector(".nav-links")

burgerMenu.addEventListener('click',()=>{
navLinks.classList.toggle("mobile-menu")
})


// pages des projets 

// fetch('data.json')
//       .then(response => response.json())
//       .then(data => {
//         // Fonction pour afficher les projets dynamiquement
//         function afficherProjets(projets) {
//           const projetsContainer = document.getElementById('projects-container');

//           // Parcourir chaque projet dans les données
//           projets.forEach(projet => {
//             // Créer une div pour chaque projet
//             const projetDiv = document.createElement('div');
//             projetDiv.classList.add('project');

//             // Remplir la div avec les informations du projet
//             projetDiv.innerHTML = `
//               <a href="${projet.titre}" class="">
//                 <h3 class="project-title">${projet.typeprojet}</h3>
//                 <img src="${projet.image}" alt="${projet.alt}">
//                 <p>${projet.explication}</p>
//               </a>
//             `;

//             // Ajouter la div au conteneur des projets
//             projetsContainer.appendChild(projetDiv);
//           });
//         }

//         // Appeler la fonction pour afficher les projets avec les données récupérées
//         afficherProjets(data);
//       })

document.addEventListener('DOMContentLoaded', function () {
fetch('data.json')
.then((response) => response.json())
.then((json) => {
    // let data = json;
    data = json;  
    keys = Object.keys(data)
    ProjetsKeys = keys.slice(-6);
    ProjetsKeys.reverse();
    console.log(keys, ProjetsKeys)
    console.log(data);
    let projectContainer = document.querySelector('#projects .projects-container');


    ProjetsKeys.forEach(function (key) {
        let projectElement = document.createElement('div');
        projectElement.classList.add('project-box');
        projectElement.id = key;
        console.log(key);
        console.log(projectElement)
        projectElement.style.backgroundImage = "url('" + data[key].image + "')";
        projectElement.style.backgroundSize = "100% 100%";
        projectElement.style.backgroundSize = "center";
        
        projectElement.innerHTML += "<p class='img-text'>" + data[key].titre + "</p><br>";
        // projectElement.style.borderColor = data[key].couleur;  
        
        projectElement.addEventListener('click', function () {
            console.log(key);
            window.location.href = "projet.html?id=" + key;
        });

        projectContainer.appendChild(projectElement);
        console.log(projectContainer)
    });
});
})
