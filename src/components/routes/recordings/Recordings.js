import './Recordings.css'

import RecordingsList from './recordingsList/RecordingsList'
import Submit from './submit/Submit'

export default function Recordings() {
  return (
    <div className="Recordings">
      <h1>Recordings</h1>
      <RecordingsList />
      <Submit />
    </div>
  );
}