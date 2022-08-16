import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('Test on <PrivateRoute/> component.', () => { 
    
    test('Should work the private route', ()=>{

        Storage.prototype.setItem = jest.fn();

        const authValue = {
            logged:true,
            user:{
                id:1234,
                name:'Josue'
            }
        }
    
        render(
            <AuthContext.Provider value={authValue}>
                <MemoryRouter >
                    <PrivateRoute>
                        <h1>Private Route</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        // screen.debug();
        expect(screen.getByText('Private Route')).toBeTruthy();
        expect(localStorage.setItem).toBeCalledWith('lastPath',"\"/\"");
    })
 })