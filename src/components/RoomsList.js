import React from 'react';
import Room from "./Room";
function RoomsList({rooms}) {

    return (
      <section className="roomslist">
<div className="roomslist-center">
{
  rooms.map(item => {
    return <Room key = {item.id} room = {item} />;
  })
}

</div>

      </section>
    );
  }

export default RoomsList;
