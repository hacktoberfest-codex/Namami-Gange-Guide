import React from 'react'
import { MantineProvider, Text } from '@mantine/core';

function App() {
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS>
        <Text>Welcome to Mantine!</Text>
        <h1 className='text-3xl text-red-400'>Hello there!!</h1>
      </MantineProvider>
    </>
  )
}

export default App
