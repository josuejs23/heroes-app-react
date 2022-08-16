import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../src/auth'
import { AppRouter } from '../../src/router'

describe('Test on <AppRouter/>', ()=>{
    test('Should navigate to login page', ()=>{

        const authValue = {
            logged:false
        }
        render(
            <AuthContext.Provider value={authValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Login Page')).toBeTruthy();
    })

    test('Should navigate to main page', ()=>{

        const authValue = {
            logged:true,
            user:{
                name:'Josue',
                id:2302
            }
        }
        render(
            <AuthContext.Provider value={authValue}>
                <MemoryRouter>
                    <AppRouter></AppRouter>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText('Josue')).toBeTruthy();
    })
})