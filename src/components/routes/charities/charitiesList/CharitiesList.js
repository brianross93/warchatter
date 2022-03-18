import './CharitiesList.css'
import Charities from './charities.json'

export default function CharitiesList() {
  return (
    <>
    <div className='container'>
    <div className="CharitiesList">
      <h2>War Effort Charities</h2>
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
      <h2>Children Charities</h2>
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
      <h2>Elderly Charities</h2>
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
      <h2>Woman Charities</h2>
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
      <h2>Blood Donation Charities</h2>
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
      <h2>Animal Charities</h2>
      <ul>
        {Charities.animals.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
      
    <div className="EnvironmentCharities">
      <h2>Environment Charities</h2>
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
  <h2>Homeless Charities</h2>
      <ul>
        {Charities.homeless.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
{/* <div className="JorunalCharities">
      <h2>Journalism Charities</h2>
      <ul>
        {Charities.journalism.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div> */}

{/* <div className="HeritageCharitites">
      <h2>Heritage Charities</h2>
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
      <h2>Covid Charities</h2>
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
      <h2>Other Charities</h2>
      <ul>
        {Charities.other.map((charity, i ) => (
          <li key={i}>
            <a href={charity.link}>{charity.title}</a>
            <p>{charity.description}</p>
          </li>
        ))}
      </ul>
    </div> */}

    </>
  );
}