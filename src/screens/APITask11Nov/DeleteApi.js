import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {deleteUser} from './SliceScreen';

const url = '  https://mallorca-ai.azurewebsites.net/user/delete-search ';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwaG9lbml4aW1tYW5lbnRAZ21haWwuY29tIiwiZXhwIjoxNzMzOTEwMDE5fQ.eyvRMV7ZGfCokdFzWE099JAymEq9QE285schJ5MT3T0';

export const deleteApi = createAsyncThunk(
  'deleteApi',
  async (search_id, {dispatch, getState}) => {
    console.log('SID', search_id);

    try {
      const response = await axios.post(
        url,
        {
          search_id: search_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        },
      );
      console.log(response.data.status);
      if (response.data.status === 200) {
        dispatch(deleteUser(search_id));
      }

      return response.data;
    } catch (error) {
      console.log(
        'Error making post request',
        error.response ? error.response.data : error.message,
      );
    }
  },
);
