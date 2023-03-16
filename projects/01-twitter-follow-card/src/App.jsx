import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {

  const users = [
    {
      name: 'Fernanda',
      userName: 'Ferla04',
      isFollowing: true
    },
    {
      name: 'JuanERQ',
      userName: 'juanerq',
      isFollowing: false
    },
    {
      name: 'Miguel',
      userName: 'midudev',
      isFollowing: false
    }
  ]


  return (
    <section className='App'>
      {
        users.map(user => (
          <TwitterFollowCard 
            key={user.userName} 
            userName={user.userName} 
            initialIsFollowing={user.isFollowing}
          >
            {user.name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}