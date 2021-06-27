import { ChevronRight } from '@material-ui/icons';
import './App.css';
import DynamicFooter from './MainComponents/DynamicFooter';
import DynamicHeader from './MainComponents/DynamicHeader';
import ImageBanner from './MainComponents/ImageBanner';
import StaticFooter from './MainComponents/StaticFooter';
import StaticHeader from './MainComponents/StaticHeader';

function App() {
  return (
    <div className="App">
      {/* static header */}
      <StaticHeader />

      {/* dynamic header */}
      <DynamicHeader />

      {/* image banner  */}
      <ImageBanner />

      <div className="breadcrumbs">
        <span>Home</span>
        <ChevronRight />
        <span>About Us</span>
        <ChevronRight />
        <span className="active" >News & Articles</span>
      </div>

      <div className="pageSummary" >VIEW OUR TRENDING NEWS STORIES</div>

      {/* article gallery */}


      {/* dynamic footer */}
      <DynamicFooter />

      {/* static footer */}
      <StaticFooter />

    </div>
  );
}

export default App;
