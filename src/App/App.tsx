import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from 'src/pages/PostsListPage/PostListPage';
import PostDetailPage from 'src/pages/PostDetailPage/PostDetailPage';
import { ThemeProvider } from '@mui/material';
import { theme } from 'src/shared/config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/post/:id" element={<PostDetailPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
