import { types } from "../../src/auth"

types
describe('Test on types.js', ()=>{
    test('Dont should return undefined', ()=>{
        expect(types.login).toBeTruthy();
        expect(types.logout).toBeTruthy();
        expect(types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout',
        });
    });

})