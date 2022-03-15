import './Charities.css'
import CharitiesList from './charitiesList/CharitiesList';
// import CharitiesFooter from './charitiesFooter/CharitiesFooter';

export default function Charities() {
  return (
    <div className="Charities">
      <h1>Charities Page</h1>
      <CharitiesList />
      {/* <CharitiesFooter /> */}
    </div>
  );
}