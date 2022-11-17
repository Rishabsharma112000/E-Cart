import {createStore} from "redux";
import rootReducer from "./reducer/redIndex"


 const store = createStore(rootReducer);

store.subscribe((state)=>{
    console.log("State Update",state)
})

export default store;