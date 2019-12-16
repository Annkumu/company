import { type } from "os"

const defaultState = {
    inputValue:'write someting',
    list:[
        'a','b','c'
    ]
}
export default (state = defaultState,action) =>{

    console.log(state,action)
    //reducer里只能接受state不能改变state
    if(action.type === 'changeInput'){
        let newState = JSON.parse(JSON.stringify(state)) //深度拷贝？
        newState.inputValue=action.value
    }
    return state
}