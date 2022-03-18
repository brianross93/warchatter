import './RecordingsList.css'
import Recordings from './recordings.json'
import transcript4034 from './4034transcript.js'


export default function RecordingsList() {


  function getTranscript(){
    // This function will display the transcript in a div below the list of recordings
    // To do this, we need to create a div with a class of "transcript"
    // Then we need to create a paragraph tag with the transcript text
    // Then we need to append the paragraph tag to the div
    // Then we need to append the div to the body
    // Code:

    // also open the text in a small window off to the side
    const transcriptWindow = window.open('', 'transcriptWindow', 'width=500,height=500');
    transcriptWindow.document.write(transcript4034);

    
    transcriptWindow.document.body.style.backgroundColor = '#FFFFFF';
    transcriptWindow.document.body.style.fontFamily = 'Arial';
    transcriptWindow.document.body.style.fontSize = '16px';
    transcriptWindow.document.body.style.color = '#000000';
    transcriptWindow.document.body.style.padding = '10px';
    transcriptWindow.document.body.style.margin = '0';
    transcriptWindow.document.body.style.border = '1px solid #000000';
    transcriptWindow.document.body.style.borderRadius = '5px';
    transcriptWindow.document.body.style.boxShadow = '5px 5px 5px #000000';
    transcriptWindow.document.body.style.overflow = 'scroll';
    transcriptWindow.document.body.style.textAlign = 'left';
    transcriptWindow.document.body.style.width = '350px'

  }

  //create a unix time stamp converter for converting times from unix to human readable
  // this timestamp function will be called in the forEach loop below
  function timestamp(unixTime){
    const date = new Date(unixTime * 1000);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const formattedTime = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return formattedTime;
  }



  return (
    <>
    <div className="7933Recording">
      <h1>Frequency 7933</h1>
      <ul>
        {Recordings.f7933.map((recording, i ) => (
          <li key={i}>
            <a href={recording.link}>{recording.title}</a>
            <p>{timestamp(recording.time)} UKR TIME</p>
            {/* <p>{timestamp(recording.timestamp)}</p> */}
          </li>
          
        ))}
      </ul>
    </div>
    <h1>Frequency 4034</h1>
    <div className='Recording4034'>
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
    {/* Add a div for the translation to display */}
    {/* It shoulkd display the translation when the Transcribe button is pressed */}

    
    </>
  );
}