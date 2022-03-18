import './Tuner.css'
import TunerBanner from './tunerBanner/TunerBanner'
import Tuners from './tuners/Tuners'
import Frequencies from './frequencies/Frequencies'

export default function Tuner() {
  return (
    <div className="Tuner">
      <TunerBanner />
      <Tuners />
      {/* <Frequencies /> */}
    </div>
  );
}