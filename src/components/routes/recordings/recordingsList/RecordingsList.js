// Refactored the code to include error handling.
import './RecordingsList.css'
import recordings from "./recordings.json";
export default function RecordingsList() {
  try {
    return (
      <div className="RecordingsList">
        <h1>List</h1>
        <ul>
          {recordings.map(recordings => (
            <li key={recordings.id}>
              <a href={recordings.url}>{recordings.title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    return (
      <div className="RecordingsList">
        <h1>List</h1>
        <p>There was an error loading the recordings list</p>
      </div>
    );
  }
}