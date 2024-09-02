import './tags.scss'

function Tags({ tags }) {
  

    return (
      <div>
        <div className="logement-tag">
           {tags.map((tag, index) => (
                <button key={index}>{tag}</button>
            ))}
        </div>
      </div>
    );
}
  
export default Tags