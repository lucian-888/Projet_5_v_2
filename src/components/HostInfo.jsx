import './hostinfo.scss';


function HostInfo({ name, picture }) {
  // Diviser le nom en deux parties
  const nameParts = name.split(' '); // Diviser par espace

  
  return (

    <div className="host-info">
      <p className="host-name">{nameParts[0]}<br />{nameParts.slice(1).join(' ')}</p>
      <img src={picture} alt={`Host: ${name}`} className="host-picture" />
    </div>

  );
}

export default HostInfo;
