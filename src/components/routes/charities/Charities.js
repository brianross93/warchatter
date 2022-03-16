import './Charities.css'
import CharitiesBanner from './charitiesBanner/CharitiesBanner'
import CharitiesList from './charitiesList/CharitiesList'

export default function Charities() {
  return (
    <div className="Charities">
      <CharitiesBanner />
      <CharitiesList />
    </div>
  );
}