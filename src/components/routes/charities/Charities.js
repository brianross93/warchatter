import './Charities.css'
import CharitiesList from './charitiesList/CharitiesList';
import Footer from '../../footer/Footer';
import CharitiesBanner from './charitiesBanner/CharitiesBanner'

export default function Charities() {
  return (
    <div className="Charities">
      <CharitiesBanner />
      <CharitiesList />
      <Footer />
    </div>
  );
}