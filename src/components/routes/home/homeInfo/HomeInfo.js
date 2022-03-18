import './HomeInfo.css'

export default function HomeInfo() {
  return (
    <div className='HomeInfo'>
      <h3 id="header">About this site: </h3>
      <ul>
        <li>
        This websites hosts archive links to Russian military communications during the Russian Ukrainian conflict. 
        </li>
        <li>
        This website hosts information about how to access the radio, where to listen to the recordings, and how to submit your own recordings for archival. 
        </li>
        <li>
        The purpose of this website is to provide reference material for journalists and other cataloguers of the Russian Unkrainian conflict. 
        </li>
        <li>
        The Tuner page hosts a web SDR radio tuner created and maintained by the University of Twente (UTW). On it, you will find the frequencies which have been used by the Russian military to broadcast military communications.
        </li>
        <li>
        The Recordings page hosts recordings of the Russian military communications as well as translations. You can submit your own recordings for archival.
        </li>
      </ul>
    </div>
  )
}