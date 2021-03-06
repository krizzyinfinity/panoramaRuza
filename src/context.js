 import React, { Component } from 'react';

import Client from "./Contentful";

const RoomContext = React.createContext();

 class RoomProvider extends Component {
  state = {
rooms: [],
sortedRooms:[],
featuredRooms:[],
loading: true
};

getData = async () =>{
  try{
    let response = await Client
    .getEntries({
      content_type:"panoramaRuza"
    });
    let rooms = this.formatData(response.items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    this.setState({
     rooms,
     featuredRooms,
    sortedRooms:rooms,
    loading: false
    });
  } catch(error) {
    console.log();
  }
}

componentDidMount() {
  this.getData()
  
}

formatData(items) {
let tempItems = items.map(item =>{
let id = item.sys.id;
let images = item.fields.images.map(image => image.fields.file.url);
let room = {...item.fields, images, id};
return room;

});
  return tempItems;
}
getRoom = (slug) => {
  let tempRooms = [...this.state.rooms];
const room = tempRooms.find((room) => room.slug === slug);
return room;
};

render() {
  return(
<RoomContext.Provider value={{...this.state, getRoom: this.getRoom}}>
{this.props.children}
</RoomContext.Provider>
);
}

}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
  return function consumerWrapper(props) {
    return <RoomConsumer>
{value => <Component  {...props} context={value}/>}
    </RoomConsumer>
  }
}

export {RoomProvider, RoomConsumer, RoomContext};
