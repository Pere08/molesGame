import { IShowPoints } from "./ShowPoints.props";

const ShowPoints = ({numPoints}: IShowPoints) => {

    return (
      <div className="show-points">
        {numPoints}
      </div>
    );
  };
  
export default ShowPoints;