import React from 'react';
import { Center, createTheme } from '@mantine/core';
import { MantineProvider } from '@mantine/core';
import { emotionTransform, MantineEmotionProvider } from '@mantine/emotion';
import '@mantine/core/styles.css';
import AppContent from './AppContent';
import colors from './colors';
import { ProfileProvider } from './Contexts/ProfileContext';

const theme = createTheme({
  fontFamily: 'Inter',
  components: {
    Title: {
      defaultProps: {
        c: colors.White
      }
    },
    Text: {
      defaultProps: {
        c: colors.White,
      },
      styles: {
        root: {
          fontSize: '14px'
        }
      }
    },
    Button: {
      defaultProps: {
        color: colors.Grey,
      },
      styles: {
        root: {
          width: '300px',
        }
      }
    }
  }
});

function App() {
  return (
    <MantineEmotionProvider>
      <MantineProvider theme={theme} stylesTransform={emotionTransform}>
        <ProfileProvider>
          <Center bg={colors.OffBlack} style={{minHeight: '100vh'}}>
            <AppContent/>
          </Center>
        </ProfileProvider>
      </MantineProvider>
    </MantineEmotionProvider>
  );
}

export default App;