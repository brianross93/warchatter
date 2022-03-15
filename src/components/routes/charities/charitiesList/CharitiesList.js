import './CharitiesList.css'
import Charities from './charities.json'

export default function CharitiesList() {
  return (
    <div className="CharitiesList">
      <ul>
        {Charities.charities.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}