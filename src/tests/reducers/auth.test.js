import authReducer from '../../reducers/auth';


test('should authReducer with default valuse generate right state',()=>{
    const state = authReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual({});
})
test('should authReducer with loginAction generate right state',()=>{
    const action ={
        type:'LOGIN',
        uid:'123'
    }
    const state = authReducer(undefined,action);
    expect(state).toEqual({
        uid:action.uid
    });

})
test('should authReducer with logoutAction generate right state',()=>{
    const defaultState={
        uid:'123'
    }
    const state = authReducer(defaultState,{type:"LOGOUT"});
    expect(state).toEqual({});
})