import './tags.scss'


function Tags({ tags }) {
  

    return (

        <div className="logement-tag">
          {/* Utilisation de la méthode map() pour parcourir le tableau 'tags'.*/}
          {tags.map((tag, index) => (
            // Création d'un bouton pour chaque tag
            <button key={index}>{tag}</button>
          ))}
        </div>

    );
}
  
export default Tags