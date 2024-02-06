import { Routes, Route } from 'react-router-dom';
import style from './Main.module.scss';
import AdvancedLevel from '../../Pages/AdvancedLevel/AdvancedLevel';
import MainContent from '../MainContent/MainContent';
import FormSignIn from '../../Pages/FormSignIn/FormSignIn';
import FormSuccess from '../../Pages/FormSuccess/FormSuccess';
import PagePost from '../../Pages/PagePost/PagePost';
import Blog from '../../Pages/Blog/Blog';
import SearchResult from '../../Pages/SearchResult/SearchResult';
import PostList from '../PostList/PostList';
import Pagination from '../Pagination/Pagination';
import PrivatePoute from '../../Pages/PrivatePoute';
import TitlePage from '../../Pages/TitlePage/TitlePage';

export default function Main() {
  return (
    <div className={style.wrapper}>
      <Routes>
        <Route path='/' element={<TitlePage />} />
        <Route
          path='sign-in'
          element={
            <MainContent title='Sign In'>
              <FormSignIn />
            </MainContent>
          }
        />
        <Route element={<PrivatePoute />}>
          <Route
            path='success'
            element={
              <MainContent title='Success'>
                <FormSuccess />
              </MainContent>
            }
          />
          <Route
            path='blog/*'
            element={
              <MainContent title='Blog'>
                <Blog />
              </MainContent>
            }
          >
            <Route
              path='all'
              element={
                <>
                  <PostList />
                  <Pagination pageQty={11} />
                </>
              }
            />
            <Route path='favorites' element={<div>Page in progress</div>} />
            <Route path='popular' element={<div>Page in progress</div>} />
          </Route>
        </Route>
        <Route
          path='posts'
          element={
            <>
              <MainContent title='Posts'>
                <PostList />
              </MainContent>
              <Pagination pageQty={11} />
            </>
          }
        />
        <Route
          path='posts/:id'
          element={
            <MainContent title='Post'>
              <PagePost />
            </MainContent>
          }
        />
        <Route
          path='search-result'
          element={
            <MainContent title='Search result'>
              <SearchResult />
            </MainContent>
          }
        />
        <Route
          path='advanced-level'
          element={
            <MainContent title='Advanced Level'>
              <AdvancedLevel />
            </MainContent>
          }
        />
      </Routes>
    </div>
  );
}
