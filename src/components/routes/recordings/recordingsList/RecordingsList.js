import './RecordingsList.css'
import Recordings from './recordings.json'
import transcript4034 from './4034transcript.js'


export default function RecordingsList() {


  function getTranscript(){
    console.log(transcript4034);
  }
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
      <ul>
        {Recordings.f4034.map((recording, i ) => (
          <li key={i}>
            <a href={recording.link}>{recording.title}</a>
            <p>{recording.time}</p>
            {/* display transcript data */}
            <p>{recording.transcript.file}</p>
          </li>
        ))}
      </ul>
      <button onClick={() => getTranscript()}>Transcribe</button>
    </div>
    </>
  );
}