import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AppReducer = {
    status: 'succeed'
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppProgressStatus(state, action: PayloadAction<{ status: setAppProgressStatusPayload }>) {
            state.status = action.payload.status
        }
    }
})

export const { setAppProgressStatus } = appSlice.actions

type AppReducer = {
    status: setAppProgressStatusPayload
}
type setAppProgressStatusPayload = 'loading' | 'succeed'


export default appSlice.reducer;