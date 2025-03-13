import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostListPage from 'src/pages/PostsListPage/ui/PostListPage';
import PostDetailPage from 'src/pages/PostDetailPage/ui/PostDetailPage';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0056ab',
    },
    secondary: {
      main: '#2a2a2b',
    },
  },
});

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
