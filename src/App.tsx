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
import { RoutePath } from '.';
import SignUp from './Pages/SignUp/SignUn';

export default function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path={RoutePath.ROOT} element={<AppLayout />}>
        <Route index element={<TitlePage />} />
        <Route path={RoutePath.SIGN_IN} element={<FormSignIn />} />
        <Route path={RoutePath.SIGN_UP} element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path={RoutePath.SUCCESS} element={<FormSuccess />} />
          <Route path={RoutePath.BLOG} element={<Blog />}>
            <Route path={RoutePath.ALL} element={<PostList />} />
            <Route path={RoutePath.FAVORITES} element={<Favorites />} />
            <Route path={RoutePath.POPULAR} element={<NotFound />} />
          </Route>
        </Route>
        <Route path={RoutePath.POSTS} element={<PostList />} />
        <Route path={RoutePath.POSTS_ID} element={<PagePost />} />
        <Route path={RoutePath.SEARCH_RESULT} element={<SearchResult />} />
        <Route path={RoutePath.ADVANCED_LEVEL} element={<AdvancedLevel />} />
        <Route path={RoutePath.NOT_FOUND} element={<NotFound />} />
      </Route>
    </Routes>
  );
}
