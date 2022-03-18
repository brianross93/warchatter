import './Charities.css'
import CharitiesList from './charitiesList/CharitiesList';
import CharitiesBanner from './charitiesBanner/CharitiesBanner'

export default function Charities() {
  return (
    <div className="Charities">
      <CharitiesBanner />
      <CharitiesList />
    </div>
  );
}