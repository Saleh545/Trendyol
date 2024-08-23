//import routes
import DataContext from './context/DataContext'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div>

      <DataContext.Provider>
      <AppRoutes/>
      </DataContext.Provider>
    </div>
  )
}

export default App