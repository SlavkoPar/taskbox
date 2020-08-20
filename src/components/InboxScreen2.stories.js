import React from 'react';
import { Provider } from 'react-redux';

import InboxScreen from './InboxScreen';
import store from '../lib/redux'

export default {
  component: InboxScreen,
  title: 'InboxScreen2',
  decorators: [story => <Provider store={store}>{story()}</Provider>],
};

// // A super-simple mock of a redux store
// const store = {
//   getState: () => {
//     return {
//       tasks: defaultTasksData,
//     };
//   },
//   subscribe: () => 0,
//   dispatch: action('dispatch'),
// };

export const Default = () => <InboxScreen />;

export const Error = () => <InboxScreen error="Something" />;