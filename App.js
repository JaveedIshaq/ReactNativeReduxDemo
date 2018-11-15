import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStore } from 'redux';
import CounterApp from './src/CounterApp';
import { Provider } from 'react-redux';

/**
 * Store - holds our state - THERE IS ONLY ONE STATE
 * Action - State can be modified using actions - SIMPLE OBJECTS
 * Dispatcher - Action needs to be sent by someone - known as dispatching an action
 * Reducer - recieves the action and modifies the state to give us a new state
 * - pure functions
 * - only mandatory argument is the 'type'
 * 
 * Sunscriber - listens for the state change to update the ui ( using Connect)
 * 
 * 
 */
const initialState = {
  counter: 0
}
const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'INCREASE_COUNTER':
        return { counter: state.counter + 1 }
    case 'DECREASE_COUNTER':
        return { counter: state.counter - 1 }
  }
   return state;
}
const store = createStore(reducer)

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <CounterApp />
      </Provider>
      
    );
  }
}
