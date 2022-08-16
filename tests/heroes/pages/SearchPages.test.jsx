import {render, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../../src/auth';
import {SearchPage} from '../../../src/heroes';

const mockedUseNavigate = jest.fn();
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate:()=>mockedUseNavigate
}))

describe('Test on <SearchPage/>', () => { 
    test('Should make match with the snapshot', ()=>{

        const authContextValue = {
            logged : true,
            user:{
                name:'Josue Zorrilla',
                id:2302
            }
        }
        const {container} = render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )
        
        expect(container).toMatchSnapshot();
    })

    test('Should show batman', ()=>{

        
        render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )
        // screen.debug();
        const img = screen.getByRole('img');
        const divSearchHero = screen.getByText('Search a hero');
        const divNoHero = screen.getByText(`There's is no hero: batman`);
        expect(img.src).toContain("/assets/heroes/dc-batman.jpg");
        expect(screen.getByRole('heading',{level:5}).innerHTML).toContain('Batman')
        expect(divSearchHero.style._values).toEqual({"display": "none"})
        expect(divNoHero.style._values).toEqual({"display": "none"})
    })

    test('Should show a error if cant find the heroe', ()=>{
        render(
            <MemoryRouter initialEntries={['/search?q=xxxxxx']}>
                <SearchPage/>
            </MemoryRouter>
        )
        expect(screen.getByText(`There's is no hero: xxxxxx`)).toBeTruthy();
    })

    test('Should navigate to the hero page', ()=>{
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )
        const textBox = screen.getByRole('textbox');
        fireEvent.change(textBox,{target : {name:'searchText',value:'batman'}})
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        // screen.debug();
        expect(mockedUseNavigate).toBeCalledWith('?q=batman');
    })
 })