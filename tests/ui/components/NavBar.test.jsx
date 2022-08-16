import {render, screen, fireEvent} from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { AuthContext } from "../../../src/auth"
import { AppRouter } from '../../../src/router'
import { Navbar } from '../../../src/ui'

const mockedUsedNavigate = jest.fn();

//  To mock a function that lives with another methods,
// You must provide the path and a callback that return 
// the rest of the function as it is with the method ...jest.requireActual(path)
// and as the last argument must set the metod to the mock returned by the a callback
jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate : ()=> mockedUsedNavigate
}))

describe('Test on <NavBar/> component', () => {

    const authValue = {
        logged: true,
        user:{
            name:'Josue',
            id:123
        }
    }

    beforeEach(()=>jest.clearAllMocks());
    
    test('Should show the name of the user', ()=>{


        render(
            <AuthContext.Provider value={authValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect(screen.getByText('Josue')).toBeTruthy();
        // screen.debug();
    })

    test('Should click the logout button', ()=>{

        const authValue = {
            logged: true,
            user:{
                name:'Josue',
                id:123
            },
            logout:jest.fn()
        }

        render(
            <AuthContext.Provider value={authValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const btnLogout = screen.getByRole('button');
        fireEvent.click(btnLogout);
        expect(authValue.logout).toHaveBeenCalled();
        expect(mockedUsedNavigate).toHaveBeenCalledWith('/login', {"replace":true});
    })
 })