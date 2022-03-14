import './Tuner.css'

import Tuners from './tuners/Tuners'
import Frequencies from './frequencies/Frequencies'

export default function Tuner() {
  return (
    <div className="Tuner">
      <h1>Tuner Page</h1>
      <Tuners />
      <Frequencies />
    </div>
  );
}