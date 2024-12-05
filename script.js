function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
      let name = data.publication.nomPublication;
      //console.log(name);
      
      let slogan = data.publication.slogan;
      //console.log(slogan);
      
      let messageInvitation= data.publication.messageInvitation;
      //console.log(messageInvitation);
      
      ////ARTICLE VEDETTE
      let articleVedette= data.publication.articleVedette;
      let sectionArticleVedette = document.getElementById('articleVedette');
      afficherArticleVedette(articleVedette, sectionArticleVedette);
      /// AUTRES ARTICLES
      let articles = data.publication.listeArticles;

      let article = articles[0];
      // console.log(article);
      
      
      articles.forEach(article => {
        let titre = article.titreArticle;
      let datePublication = article.datePublication;
      let categorie = article.categorie;
      let illustration = article.illustration;
        // console.log(titre, datePublication, categorie, illustration);
        
        
        
      });

      let equipeRedaction= data.publication.equipeRedaction
      let sectionequipeRedaction = document.getElementById('team')
      afficherequipeRedaction(equipeRedaction, sectionequipeRedaction); 
      
      let redactions = data.publication.equipeRedaction;

      let redaction = redactions[0];
      // console.log(redaction);
      
      redactions.forEach(redaction => {
      let nomAuteur= redaction.nomAuteur;
      let specialite = redaction.specialite;
      let biographie = redaction.biographie;
      console.log(nomAuteur, specialite, biographie);
      
       });


       afficherHeader(data);
       /// FIN DU CODE
     })
    .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici

 function afficherHeader(data) {
  let publication = data.publication;
  let titreHeader = publication.nomPublication;
  let slogan = publication.slogan;
  let themes = publication.themes;
  // console.log(description);

  let themesList = " ";

themes.forEach(theme => {
  themesList +=`<h2>${theme.nomTheme}</h2><p>${theme.descriptionTheme}</p>`;
  
});


  let header = 
      `<div>
            <h2>${titreHeader}</h2>
            <h1>${slogan}</h1>
         </div>
         <div id="themes">
            <div class="theme">
               ${themesList}
            </div>
         </div>`

  console.log(header);
  
 let container = document.getElementById('header');
 container.insertAdjacentHTML('beforeend', header);
  
  
 }

function afficherArticleVedette(article, container) {
  let titreArticleVedette= article.titreArticle;
  let datearticle= article.datePublication;
  let resume= article.resume;
  let categorie= article.categorie;
  let illustration= article.illustration;

  let card= `
  <img src="${illustration}">
  <div class="articlePrincipal">
    <h2>${titreArticleVedette}</h2>
    <h3>${categorie} - ${datearticle}</h3>
    <p>${resume}</p>
    <a>lire article</a>
  </div>`;
  container.insertAdjacentHTML('afterbegin', card);
} 
  
 
function afficherequipeRedaction(redaction, container) {
  console.log(redaction);
  
  let nomAuteur= redaction.nomAuteur;
      console.log(nomAuteur);
      
      let specialite = redaction.specialite;
      console.log(specialite);
      
      let biographie = redaction.biographie;
      console.log(biographie);
      
      let team =
      `<div>
      <h1>DISCOVER OUR TEAM</h1>
      <img src="" alt="photo">
      <h2>${nomAuteur}</h2>
      <p>${specialite}${biographie}
      </p>
   </div>
<div></div>
<img src="" alt="photo">
      <h2>${nomAuteur}</h2>
      <p>${specialite}${biographie}
      </p>
</div>
<div>
   <img src="" alt="photo">
      <h2>${nomAuteur}</h2>
      <p>${specialite}${biographie}
      </p>
</div>`;

   container.insertAdjacentHTML('afterbegin', team);
}

