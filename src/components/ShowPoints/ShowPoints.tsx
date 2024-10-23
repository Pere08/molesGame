import { IShowPoints } from './ShowPoints.props';
import './ShowPoints.css';

const ShowPoints = ({ numPoints }: IShowPoints) => {
  return <button className="show-points">{numPoints}</button>;
};

export default ShowPoints;
