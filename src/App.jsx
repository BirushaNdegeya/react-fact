import React, {useState} from "react";
import Header from './components/Header';
import Main from './components/Main';
import './style.css';


const App = () => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleMode = () => {
      console.log('Clicked!');
      setIsDarkMode((prevMode) => !prevMode);
   };

    return (
        <div className="container">
            <Header 
               darkMode={isDarkMode}
               toggleDarkMode={toggleMode} />
            <Main darkMode={isDarkMode} />
        </div>
    );
};

export default App;