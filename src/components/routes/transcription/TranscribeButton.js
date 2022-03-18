import react from "react";
import "./Transcription.css";
import transcript4034 from "../recordings/recordingsList/4034transcript";

export default function TranscribeButton() {

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

  return (
    <div className="Transcription">
      <button onClick={() => getTranscript()}>Transcribe</button>
    </div>
  );
}