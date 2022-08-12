import { heroes } from '../data/heroes';

export const getHeroByPublisher = (publisher) => {
    
    const validPublishers = ['DC Comics','Marvel Comics'];

    if(!validPublishers.includes(publisher)){
        throw new Error(`The ${publisher} does not exist.`)
    }
    return heroes.filter(heroe=>(heroe.publisher === publisher));
}