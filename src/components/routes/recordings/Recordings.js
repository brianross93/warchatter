import './Recordings.css'

import RecordingsList from './recordingsList/RecordingsList.js';
import Submit from './submit/Submit'

export default function Recordings() {
  return (
    <div className="Recordings">
      <RecordingsList />
      {/* <Submit /> */}
    </div>
  );
}