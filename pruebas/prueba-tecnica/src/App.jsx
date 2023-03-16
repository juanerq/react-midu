import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${'firstWord'}?sixe=50&color=red&json=true`
const CAT_ENDPOINT_BASE_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [imgUrl, setImgUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstThreeCharacters = fact.split(' ', 3).join(' ')

        fetch(`https://cataas.com/cat/says/${firstThreeCharacters}?sixe=50&color=red&json=true`)
          .then(res => res.json())
          .then(data => setImgUrl(data.url))
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={CAT_ENDPOINT_BASE_IMAGE_URL + imgUrl} alt='cat' />}
    </main>
  )
}
