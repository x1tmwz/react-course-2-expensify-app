import {login,logout} from '../../actions/auth';

test('should login generate the right object',()=>{
    const uid = 'abc5'
    expect(login(uid)).toEqual({
        type:'LOGIN',
        uid
    })

})
test('should logout generate the right object',()=>{
    expect(logout()).toEqual({
        type:'LOGOUT'
    })
})