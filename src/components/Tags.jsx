import './tags.scss'

function Tags({ tags }) {
  

    return (
      <div>
        <div className="logement-tag">
           {/* 
        Utilisation de la méthode map() pour parcourir le tableau 'tags'.
        Pour chaque 'tag' dans le tableau, on crée un bouton.
      */}
           {tags.map((tag, index) => (
            // Création d'un bouton pour chaque tag
            // Utilisation de l'index comme clé unique pour chaque élément
            //Le texte du bouton est le tag lui-même
                <button key={index}>{tag}</button>
            ))}
        </div>
      </div>
    );
}
  
export default Tags