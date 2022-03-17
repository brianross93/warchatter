import './Charities.css'
import CharitiesList from './charitiesList/CharitiesList';
import CharitiesFooter from './charitiesFooter/CharitiesFooter';
import CharitiesBanner from './charitiesBanner/CharitiesBanner'

export default function Charities() {
  return (
    <div className="Charities">
      <CharitiesList />
      <CharitiesFooter />
      <CharitiesBanner />
    </div>
  );
}