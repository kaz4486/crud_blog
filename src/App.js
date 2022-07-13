import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/common/features/views/Footer/Footer';
import Header from './components/common/features/views/Header/Header';
import About from './components/common/features/views/pages/About/About';
import Home from './components/common/features/views/pages/Home/Home';
import NotFound from './components/common/features/views/pages/NotFound/NotFound';
import Post from './components/common/features/Post/Post';
import PostAdd from './components/common/features/views/pages/PostAdd/PostAdd';
import PostEdit from './components/common/features/views/pages/PostEdit/PostEdit';
import Categories from './components/common/features/views/pages/Categories/Categories';
import Category from './components/common/features/Category/Category';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<PostAdd />} />
        <Route path='/post/edit/:id' element={<PostEdit />} />
        <Route path='/about' element={<About />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='category/:name' element={<Category />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
