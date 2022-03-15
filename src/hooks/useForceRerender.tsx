import React from 'react';
type UseForceRerender = () => React.DispatchWithoutAction;
export const useForceRerender: UseForceRerender = () => React.useReducer((x) => x + 1, 0)[1];
