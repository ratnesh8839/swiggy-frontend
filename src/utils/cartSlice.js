import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            console.log(action.payload)
            const index = state.items.findIndex(item => item.info === action.payload.info);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
})

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;