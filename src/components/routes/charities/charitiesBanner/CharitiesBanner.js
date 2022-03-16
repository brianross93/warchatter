import './CharitiesBanner.css'

export default function CharitiesBanner() {
  return (
    <div className='CharitiesBanner'>
      <h1>Charities</h1>
      <h3>If you want to support Ukraine, consider donating to any charity on this list.</h3>
      <div className='reddit'>
        <p>Source: </p>
        <a href="https://www.reddit.com/r/SupportForUkraine/comments/t0nspy/want_to_support_ukraine_heres_a_list_of_charities/">
          <img src="./reddit.png" alt="reddit logo" />
        </a>
      </div>
    </div>
  )
}