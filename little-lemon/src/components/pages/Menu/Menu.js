import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import pages from '../../../utils/pages';
import { Link } from 'react-router-dom';
import './Menu.css';

const DisplayMenu = ({ meal }) => {
  const handleOrderClick = () => {
    // Redirect to the Order page with the meal ID as a URL parameter
    window.location.href = `${pages.get('order').path}/${meal.id}`;
  };
  return (
    <article className='meal-card'>
      <div className='meal-card-image'>
        <img src={meal.image} alt={meal.name} />
      </div>
      <div className='meal-card-header'>
        <h3>{meal.name}</h3>
        <span>{meal.price}</span>
      </div>
      <div className='meal-card-body-footer'>
        <p>{meal.description}</p>
        {/* <Link to={pages.get('orderOnline').path}>
          Order 
        </Link> */}
        <button onClick={handleOrderClick}>Order a delivery <FontAwesomeIcon icon={faMotorcycle} /></button>

      </div>
    </article>
  );
};

export default DisplayMenu;