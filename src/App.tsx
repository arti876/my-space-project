import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchPosts } from './store/postSlice';
import { useAppDispatch } from './store/store';
import AdvancedLevel from './Pages/AdvancedLevel/AdvancedLevel';
import FormSignIn from './Pages/FormSignIn/FormSignIn';
import FormSuccess from './Pages/FormSuccess/FormSuccess';
import PagePost from './Pages/PagePost/PagePost';
import Blog from './Pages/Blog/Blog';
import SearchResult from './Pages/SearchResult/SearchResult';
import PostList from './components/PostList/PostList';
import PrivateRoute from './Pages/PrivateRoute';
import TitlePage from './Pages/TitlePage/TitlePage';
import AppLayout from './Pages/AppLayout/AppLayout';
import NotFound from './Pages/NotFound/NotFound';
import Favorites from './Pages/Favorites/Favorites';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<TitlePage />} />
        <Route path='sign-in' element={<FormSignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path='success' element={<FormSuccess />} />
          <Route path='blog' element={<Blog />}>
            <Route path='all' element={<PostList />} />
            <Route path='favorites' element={<Favorites />} />
            <Route path='popular' element={<NotFound />} />
          </Route>
        </Route>
        <Route path='posts' element={<PostList />} />
        <Route path='posts/:id' element={<PagePost />} />
        <Route path='search-result' element={<SearchResult />} />
        <Route path='advanced-level' element={<AdvancedLevel />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
