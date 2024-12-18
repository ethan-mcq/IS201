import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Local from './local/local';
import Login from './login/login';
import Account from './account/account';
import Chat from './chat/chat';
import Create from './create/create';
import Legal from './legal/legal';
import Pricing from './pricing/pricing';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

  return (
    <BrowserRouter>
      <div className='body bg-dark text-light'>
        <Routes>
          <Route path='/' element={<Local />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/login' element={<Login onLogin={(username) => setUserName(username)} />} />
          <Route path='/chat' element={<Chat userName={userName} />} />
          <Route path='/create' element={<Create />} />
          <Route path='/account' element={<Account username={userName} />} />
          <Route path='/legal' element={<Legal />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <footer className='bg-dark text-dark text-muted'>
          <div className='container-fluid'>
            <span className='text-reset'>GeneChat &copy; 2024</span>
            <a className='text-reset' href='https://github.com/ethan-mcq/startup'>Source</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className='container-fluid bg-secondary text-center'>404: Page Not Found</main>;
}

export default App;
