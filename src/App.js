import logo from './logo.svg';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import appRouter from './routes/appRouter';
function App() {
  const router = useRoutes(appRouter)
  return (
  <>
  {router}

  </>
 
  );
}

export default App;
