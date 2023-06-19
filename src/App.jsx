import './App.css'
import WordForm from './WordForm/WordForm'
function App() {
  console.log(import.meta.env.TELEGRAM_TOKEN);

  return (
    <>
      <WordForm />
    </>
  )
}

export default App
