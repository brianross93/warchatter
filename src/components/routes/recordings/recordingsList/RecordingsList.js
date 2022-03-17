import './RecordingsList.css'
import Recordings from './recordings.json'

export default function RecordingsList() {
  return (
    <>
    <div className="7933Recording">
      <h1>Frequency 7933</h1>
      <ul>
        {Recordings.f7933.map((recording, i ) => (
          <li key={i}>
            <a href={recording.link}>{recording.title}</a>
            <p>{recording.time}</p>
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}