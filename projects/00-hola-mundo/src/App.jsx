import './App.css'
import { TwitterFollowCard } from './TwiiterFollowCard.jsx'

const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel Durán',
        isFollowing: true
    },
    {
        userName: 'pheralb',
        name: 'Pablo Heraldo',
        isFollowing: false
    },
    {
        userName: 'PacoHdezs',
        name: 'Paco Hdez',
        isFollowing: true
    },
    {
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]

export function App(){
    const vxnder = {isFollowing: true, userName: 'vxnder'}; {/*Pasando props como objeto, normalmente es mala practica*/}

    return( 
        <section className='App'>
        {
            users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                ) )
            }
        </section>
    )
}