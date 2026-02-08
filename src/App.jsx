import { useThemeStore } from './userThemerStory';
import './App.css'

function App() {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);

  return (
    <>
      <div className={`container-header ${isDarkMode ? 'dark' : 'light'}`}>
        <h1 className='title'>Mod Dark or Light</h1>
      </div>
      <div className='container'>
        <button className='button' onClick={toggleTheme}>{isDarkMode ? 'Light' : 'Dark'}</button>
      </div>
    </>
  )
}

export default App
