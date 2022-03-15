import './Tuners.css'

export default function Tuners() {
  return (
    <div className="Tuners">
      <h1>Tuners</h1>
      <iframe src="http://websdr.ewi.utwente.nl:8901" width="100%" height="100%" />
    </div>
  );
}