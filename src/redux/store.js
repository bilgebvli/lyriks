import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApı } from './services/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApı.reducerPath]: shazamCoreApı.reducer,
    player: playerReducer,

  },
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat(shazamCoreApı.middleware),
});
