import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const FetchApi = createAsyncThunk('FetchApi', async () => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwaG9lbml4aW1tYW5lbnRAZ21haWwuY29tIiwiZXhwIjoxNzMzOTEwMDE5fQ.eyvRMV7ZGfCokdFzWE099JAymEq9QE285schJ5MT3T0';

  try {
    const response = await axios.get(
      'https://mallorca-ai.azurewebsites.net/user/search-history',
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    console.log(response.data);

    return response.data;
  } catch (e) {
    console.log('error', e);
  }
});
