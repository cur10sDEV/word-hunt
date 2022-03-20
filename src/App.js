import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import { Container} from '@mui/material';

function App() {
  async function getMeaning() {
    try {
      const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hello`)
      const data = await res.json()
      const dataToUse = await data[0]
      const {word,phonetics, meanings} = await dataToUse;
      const audioSrc = await phonetics[0].audio
      console.log(word)
      console.log(audioSrc)
      console.log(meanings)
    } catch (err) {
      console.log(err)
    }
  }

  getMeaning()
  return (
    <div className="App">
      <Container maxWidth="md">
        <Header bgColor=""/>
        {/*<Main
           word="word"
           onChange={() => {return}}
           lang="en"
           handleChange={() => {return}}
           meanings="meanings"
         />*/}
      </Container>
    </div>
  )
}

export default App;