import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import Navigation from './navigation';
import {createOvermind} from 'overmind';
import {Provider} from 'overmind-react';
import {config} from './overmind';

const overmind = createOvermind(config);

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider value={overmind}>
        <Navigation />
      </Provider>
    </SafeAreaView>
  );
}
