import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pages from '../../../utils/pages';
import DisplayMenu from './Menu';
import './index.css';
import { meals } from './data'; // Import 'meals' from the shared data file


const Menu = () => {
  return (
    <section className='week-specials'>
      <div className='week-speacials-header'>
        <h2>Today's specials!</h2>
        <Button className='orderOnline-btn' variant='warning'>
          {/* <Link to={pages.get('order').path}> */}
            Our Menu
          {/* </Link> */}
        </Button>
      </div>
      <div className='meal-grid'>
        {meals.map((meal) =>
          <DisplayMenu key={meal.id} meal={meal} />
        )}
      </div>
    </section>
  );
};

export default Menu;