import { useMemo } from 'react'
import { heroes } from '../data/heroes'
import { getHeroByPublisher } from '../helpers/getHeroByPublisher'
import { HeroCard } from './HeroCard'

export const HeroesList = ({ publisher }) => {

    const heroes = useMemo( ()=> getHeroByPublisher(publisher), [publisher])
    return (
        <>
            <div className='row rows-cols-1 row-cols-md-3 g-3'>

                {
                    heroes.map( heroe => ( <HeroCard key={heroe.id} hero={heroe} /> ))
                }

            </div>
        </>
    )
}
