import { authReducer, types } from "../../../src/auth"


describe('Test on authReducer', ()=>{

    // const [authState, dispatch] = useReducer(authReducer,{});
    
    test('Should return initial state', ()=>{
        const authState = authReducer({logged:false},{})
        expect(authState).toEqual({logged:false})
    })

    test('Should call login and set the user', ()=>{
        const action = {
            type:types.login,
            payload: {id:'0232',name:'Josue'}
        }
      const authState = authReducer( {}, action );
      expect(authState.logged).toBe(true);
      expect(authState.user).toEqual(action.payload);
    //   console.log(authState)
    })

    test('Should call logout and set logged to false', ()=>{
        const action = {
            type:types.login,
            payload: {id:'0232',name:'Josue'}
        }
        const authState = authReducer( {}, action );
        const newAuthState = authReducer( authState.user, {type:types.logout} );
        expect(newAuthState.logged).toBe(false);
      
    })
})