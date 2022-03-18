import './Tuners.css'

export default function Tuners() {
  return (
    <div className="Tuners">
      <iframe 
        title="tuner"
        src="http://websdr.ewi.utwente.nl:8901" 
        width="1000px" 
        height="500px" 
      />
    </div>
  );
}