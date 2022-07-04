import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: null
    },
    reducers: {
        addUser: (state, action) => {
            // action.payload: userData
            state.data = {...action.payload.userData}
        },
        removeUser: (state) => {
            state.data = null
        }
    }
})

export default userSlice