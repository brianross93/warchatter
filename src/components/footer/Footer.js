import './Footer.css'

export default function Footer() {
  return (
    <div className='Footer'>
      <div className='twitter'>
        <p>For anyone who can translate, please contact us on Twitter: </p>
        <a href="https://twitter.com/CashmanDian"><img src="./twitter.png" alt="twitter logo"/></a>
      </div>
      <div className="discord">
        <p>Join our Discord server: </p>
        <a href="https://discord.com/invite/K49eBFUC"><img src="./discord.png" alt="discord logo" /></a>
      </div>
    </div>
  )
}