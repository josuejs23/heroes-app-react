import { render, screen } from "@testing-library/react"
import { MemoryRouter, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../src/auth"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Test on <PublicRoute/>', ()=>{
    test('Should show the children if is not authenticated', ()=>{
        const authValue = {
            logged:false
        }

        const publicRouteText = 'Public Route'
        render(
        <AuthContext.Provider value={authValue}>
            <PublicRoute>
                <h1>{publicRouteText}</h1>
            </PublicRoute>
        </AuthContext.Provider>);
        // screen.debug();
        expect(screen.getByText(publicRouteText)).toBeTruthy();
    })

    test('Should navigate if is authenticated', ()=>{
        const authValue = {
            logged:true,
            user:{
                name:'Josue',
                id:1234
            }
        }

        const publicRouteText = 'Public Route'
        render(

        <AuthContext.Provider value={authValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={
                        <PublicRoute>
                         <h1>{publicRouteText}</h1>
                        </PublicRoute>
                    }/>
                    <Route path="/marvel" element={<h1>Marvel</h1>}/>
                </Routes>
               
            </MemoryRouter>
        </AuthContext.Provider>
        );
        // screen.debug();
        expect(screen.getByText('Marvel')).toBeTruthy();
    })
})