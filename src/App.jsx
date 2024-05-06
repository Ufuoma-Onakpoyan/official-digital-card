import Info from './Components/Info'
import About from './Components/About'
import Interest from './Components/Interests'
import Footer from './Components/Footer'

function App(){
    return(
        <div className='app-div'>
            <Info/>
            <About/>
            <Interest />
            <Footer />
        </div>
    )
}

export default App