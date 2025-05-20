import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice(
{
name:'cart' ,
initialState:{ 
items:[],
total: 0,
quantity: 0,
},
reducers: {

add: (state,action)=>{
   const existing = state.items?.find((item) => item.id === action.payload.id)
   
   if(existing){
      state.items = [...state.items.map((item) => {
         if(item.id === existing.id) {
            return {...action.payload, quantity: item.quantity + action.payload.quantity, flag: true}
         }
         else {
            return item
         }
      })]
   }else{
      state.items.push({...action.payload, quantity: action.payload.quantity, flag: true})
   }

  state.quantity = state.quantity + action.payload.quantity
  state.total += action.payload.price*action.payload.quantity
  state.total = parseFloat(state.total.toFixed(2))
},
remove: (state,{payload})=>{
   state.items= state.items.filter((item) => item.id !== payload.id)
   state.total -= parseFloat(payload.price * payload.quantity)
   state.total = state.total.toFixed(2)
   state.quantity -= payload.quantity
},

clear: ()=>{ 
   state.items= []
   state.total= 0
   state.quantity= 0
},

increase: (state, {payload} )=>{
   state.items= state.items.filter((item) => item.id !== payload.id)
   state.total += parseFloat(payload.price * payload.quantity)
   state.total = state.total.toFixed(2)
   state.quantity += payload.quantity

},
decrease: (state, {payload})=>{
   state.items= state.items.filter((item) => item.id !== payload.id)
   state.total -= parseFloat(payload.price * payload.quantity)
   state.total = state.total.toFixed(2)
   state.quantity -= payload.quantity

},

}


})

export const{ add,remove,clear,increase,decrease, quantity}=cartSlice.actions
export default cartSlice.reducer