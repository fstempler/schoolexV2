import { useState } from 'react'
import { Home, Students } from './src/screens'
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'


export default function App() {
  const [fontsLoaded] = useFonts(fonts)
  const [cursoSelected, setCursoSelected] = useState('')

  if(!fontsLoaded) {
    return null
  }
  
  return cursoSelected ? (
  <Students curso={cursoSelected} /> )
  : (<Home setCursoSelected={setCursoSelected}/>
  )
}

