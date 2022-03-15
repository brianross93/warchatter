import './RecordingsList.css'
import recordings from "./recordings.json";

export default function RecordingsList() {
  return (
    <div className="RecordingsList">
      <h1>List</h1>
      <ul>
        {recordings.map((recording, i) => (
          <li key={i}>
            <a href={recording.link}>{recording.title}</a>
            <p>{recording.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}