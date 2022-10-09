const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'IDLE',
    ERROR: 'ERROR',
    LOADING: 'LOADING',
});

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    return await data.json();
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        data: [],
        status: STATUSES.IDLE,
    },
    extraReducers: {
        [fetchProducts.pending]: (state) => {
            state.status = STATUSES.LOADING
        },
        [fetchProducts.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.status = STATUSES.IDLE;
        },
        [fetchProducts.rejected]: (state) => {
            state.status = STATUSES.ERROR;
        }
    }
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;