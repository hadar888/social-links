import React from 'react';
import { Center, createTheme } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import '@mantine/core/styles.css';
import AppContent from './AppContent';
import colors from './colors';

const theme = createTheme({
  
});

function App() {
  return (
    <MantineEmotionProvider>
      <MantineProvider theme={theme} stylesTransform={emotionTransform}>
        <Center bg={colors.DarkGrey}>
          <AppContent/>
        </Center>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}

export default App;