import { IShowPoints } from './ShowPoints.props';
import './ShowPoints.scss';

const ShowPoints = ({ numPoints }: IShowPoints) => {
  return (
    <button className="show-points">
      Points <span className="points">{numPoints}</span>
    </button>
  );
};

export default ShowPoints;
