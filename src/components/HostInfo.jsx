import './hostInfo.scss';

function HostInfo({ name, picture }) {
  // Split the name into two parts
  const nameParts = name.split(' '); // Split by space

  return (
    <div className="host-info">
      {/* Display the first part of the name */}
      <p className="host-name">{nameParts[0]}<br />{nameParts.slice(1).join(' ')}</p>
      <img src={picture} alt={`Host: ${name}`} className="host-picture" />
    </div>
  );
}

export default HostInfo;
