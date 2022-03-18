import './Home.css'
import HomeBanner from './homeBanner/HomeBanner'
import HomeInfo from './homeInfo/HomeInfo'

export default function Home() {
  return (
    <div className="Home">
      <HomeBanner />
      <HomeInfo />
    </div>
  );
}