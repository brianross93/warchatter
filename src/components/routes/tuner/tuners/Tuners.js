import './Tuners.css'

export default function Tuners() {
  return (

    <div className="Tuner-link">
      {/* link to this site "http://websdr.ewi.utwente.nl:8901" */}
      <a href="http://websdr.ewi.utwente.nl:8901">Twente Radio</a>
      
    

    
      <div className="Tuner-link-text">
      

      <h1>Tuners</h1>
      </div>
    <div className="Tuners">
      <iframe 
        title="tuner"
        src="http://websdr.ewi.utwente.nl:8901" 
        width="1000px" 
        height="500px" 
      />
    </div>
    </div>
  );
}




// const Tuners = () => {
//   const tuners = [
//       { link: "http://websdr.ewi.utwente.nl:8901", name: "University of Twente Radio Listener" },
//       { link: "http://84.201.157.25:26057", name: "Alternate Radio Listener (UKR)" },
//   ];
