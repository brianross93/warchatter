// Refactored the code to include error handling.
import './RecordingsList.css'
<<<<<<< HEAD
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
=======
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
>>>>>>> 38cab054f2a8ed40f683430ca51dff4c3a1b6399
}