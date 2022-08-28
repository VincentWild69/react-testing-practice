import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import MainPage from './Pages/MainPage/MainPage';
import Layout from './components/Layout/Layout';
import BasicExample from './Pages/BasicExample/BasicExample';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="basic" element={<BasicExample />} />
          {/* <Route path='contacts' element={<Contacts />} />
          <Route path='users' element={<Users />} />
          <Route path='users/:id' element={<ProfilePage />} /> */}
        </Route>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
