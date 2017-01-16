import React from 'react';

const PlaceCard = props => {
  return (
    <div className="container placecard">
      <div className="row">
        <div className="col-md-6">
          <div className="fg-pane">
            <h2 className='place'>Narnia</h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="description-pane">
            <p className="description">
              Narnia is a kingdom ruled over by a lion called Aslan. Once in a
              while children from the real world will stumble into Narnia through
              a wardrobe.
            </p>

            <ul className="todos">
              <li className="todo">Tea with Mr. Tumnus</li>
              <li className="todo">Turkish delight with the witch</li>
              <li className="todo">Be a son or daughter of Adam/Eve or other
                if gender is a social construct</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
