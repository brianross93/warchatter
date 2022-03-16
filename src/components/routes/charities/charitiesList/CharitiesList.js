import './CharitiesList.css'
import Charities from './charities.json'

export default function CharitiesList() {
  return (
    <>
    <div className="CharitiesList">
      <h1>War Effort Charities</h1>
      <ul>
        {Charities.charities.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="ChildrenCharities">
      <h1>Children Charities</h1>
      <ul>
        {Charities.children.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="ElderlyCharities">
      <h1>Elderly Charities</h1>
      <ul>
        {Charities.elderly.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="WomanCharities">
      <h1>Woman Charities</h1>
      <ul>
        {Charities.women.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="BloodCharities">
      <h1>Blood Donation Charities</h1>
      <ul>
        {Charities.blood.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>

    <div className="AnimalCharities">
      <h1>Animal Charities</h1>
      <ul>
        {Charities.animals.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
    <div className="environmentCharities">
      <h1>Elderly Charities</h1>
      <ul>
        {Charities.environment.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>

<div className="HomelessCharities">
      <h1>Homeless Charities</h1>
      <ul>
        {Charities.homeless.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
<div className="JorunalCharities">
      <h1>Journalism Charities</h1>
      <ul>
        {Charities.journalism.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>

<div className="HeritageCharitites">
      <h1>Heritage Charities</h1>
      <ul>
        {Charities.heritage.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
<div className="CovidCharities">
      <h1>Covid Charities</h1>
      <ul>
        {Charities.covid.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
<div className="OtherCharities">
      <h1>Other Charities</h1>
      <ul>
        {Charities.other.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>

    </>
  );
}