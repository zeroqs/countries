import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from "axios";
import {ALL_COUNTRIES, searchByCountry} from "../../fetch/fetch.jsx";

const initialState = {
  countries: [],
  status: false,
  error: '',
  filteredCountries: [],
  search: '',
  region: '',
  country: null,
  statusCountry: false,
  errorCountry: '',
}
export const fetchAllCountries = createAsyncThunk('countries/fetchAllCountries', async () => {
  const response = await axios.get(ALL_COUNTRIES)
  return response.data
})
export const fetchByCountry = createAsyncThunk('countries/fetchByCountry', async (name) => {
  const response = await axios.get(searchByCountry(name))
  return response.data[0]
})




export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    OnSearch : (state, action) => {
      state.search = action.payload
    },
    OnRegion : (state, action) => {
      state.region = action.payload
    },
    OnFilter : (state, action) => {
      let data = [...state.countries]
      if (state.region) {
        data = data.filter((c) => c.region.includes(state.region));
      }

      if (state.search) {
        data = data.filter((c) =>
            c.name.common.toLowerCase().includes(state.search.toLowerCase())
        );
      }
      state.filteredCountries = data
    },

},
  extraReducers : {
    [fetchAllCountries.pending]: (state) => {
      state.status = true
      state.error = null
    },
    [fetchAllCountries.fulfilled]: (state,action) => {
      state.status = true
      state.countries = action.payload
      state.filteredCountries = action.payload
    },
    [fetchAllCountries.rejected]: (state,action) => {
      state.error = action.error
      state.status = false
    },


    [fetchByCountry.pending]: (state) => {
      state.statusCountry = true
      state.errorCountry = null
    },
    [fetchByCountry.fulfilled]: (state,action) => {
      state.statusCountry = false
      state.country = action.payload
    },
    [fetchByCountry.rejected]: (state,action) => {
      state.errorCountry = action.error
      state.statusCountry = false
    }
  }
}
)

export const { OnSearch, OnRegion, OnFilter } = countriesSlice.actions

export default countriesSlice.reducer