import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {


  return (
    <section className='App'>
      <TwitterFollowCard userName='Ferla04'>
        Fernanda
      </TwitterFollowCard>
      <TwitterFollowCard userName='juanerq'>
        JuanERQ
      </TwitterFollowCard>
    </section>
  )
}