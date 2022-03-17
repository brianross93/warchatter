import './Home.css'
import HomeBanner from './homeBanner/HomeBanner'

export default function Home() {
  return (
    <div className="Home">
      <HomeBanner />
    
      <div className="info">
        <p>This websites hosts archive links to russian military communications during the Russian Ukrainian conflict. 
          This website hosts information about how to access the radio, where to listen to the recordings, and how to submit your own recordings for archival. 
          The purpose of this website is to provide reference material for journalists and other catalogers of the Russian Unkrainian conflict. 
          </p>
          <p>
            The Tuners page hosts a web SDR radio tuner created and maintained by the University of Twente (UTW). On it, you will find the frequencies which have been used by the Russian military to broadcast military communications.
          </p>
          <p>
            The Recordings page hosts recordings of the Russian military communications as well as translations. You can submit your own recordings for archival.
          </p>
        </div> 
    </div>
  );
}