import './App.css';
import {useState, useEffect} from "react"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Main from "./components/Main/Main"
import { Container } from '@mui/material';

function App() {
  const [word, setWord] = useState("hello")
  const [lang, setLang] = useState("en")
  const [meanings, setMeanings] = useState([])
  const [audioSrc, setAudioSrc] = useState(false)

  async function getMeaning(word, lang) {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/${lang}/${word}`)
      const data = await res.json()
      const dataToUse = await data[0]
      const {phonetics, meanings} = await dataToUse;
      const getAudioSrc = await phonetics[0].audio
      setAudioSrc(getAudioSrc)
      setMeanings(meanings)
      console.log(word,lang,getAudioSrc,meanings)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getMeaning(word,lang)
  }, [word,lang])

  return (
    <div className="App">
      <Container maxWidth="md" >
        <Header bgColor=""/>
        <Main
           word={word}
           onChange={(e) => setWord(e.target.value)}
           lang={lang}
           handleChange={(e) => setLang(e.target.value)}
           meanings={meanings}
           audio={audioSrc}
         />
         <Footer />
      </Container>
    </div>
  )
}

export default App;