import React from 'react';

const PlaceCard = props => {
  const { place, description, todos } = props.place;
  return (
    <div className="container placecard">
      <div className="row">
        <div className="col-md-6">
          <div className="fg-pane">
            <h2 className='place'>{place}</h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="description-pane">
            <p className="description">
              <i className="atlas">Atlas: </i>
              {description}
            </p>

            <i className="atlas">Things to do...</i>
            <ul className="todos">
              {todos.length > 0 ? todos.map((todo, i) => <li key={i} className="todo">{todo}</li>) : <div>Nothing!</div>}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
