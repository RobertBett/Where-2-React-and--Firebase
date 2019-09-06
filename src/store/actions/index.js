import cuid from 'cuid';
import * as actionTypes from './actionTypes';

// const events = [
//   {
//     id: '1',
//     title: 'Trip to Tower of London',
//     DateTime: '2018-03-27T11:00:00+00:00',
//     eventPhotos: [
//       {
//         id: 1,
//         imgPath: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
//       },
//       {
//         id: 2,
//         imgPath: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',

//       },
//     ],
//     category: 'culture',
//     description:
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
//     city: 'London, UK',
//     venue: 'Tower of London, St Katharine\'s & Wapping, London',
//     hostedBy: 'TOM',
//     hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
//     favoritedBy: [
//       1, 2, 3, 4, 4, 5, 5,
//     ],
//     attendees: [
//       {
//         id: 'a',
//         name: 'Bob',
//         photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
//       },
//       {
//         id: 'b',
//         name: 'Tom',
//         photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
//       },
//       {
//         id: 'a',
//         name: 'Bob',
//         photoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
//       },
//       {
//         id: 'b',
//         name: 'Tom',
//         photoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
//       },
//     ],
//   },
// ];

export const getEvents = eventInfo => (dispatch) => {
  const newEvent = eventInfo;
  newEvent.id = cuid();
  newEvent.eventPhotos = [
    {
      id: cuid(),
      imgPath: 'https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    },
    {
      id: cuid(),
      imgPath: 'https://images.unsplash.com/photo-1471967183320-ee018f6e114a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80',
    },
    {
      id: cuid(),
      imgPath: 'https://images.unsplash.com/photo-1496337589254-7e19d01cec44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
    },
  ];
  newEvent.attendees = [
    {
      id: cuid(),
      name: 'Angela',
      imgPath: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      id: cuid(),
      name: 'isabella',
      imgPath: 'https://randomuser.me/api/portraits/women/92.jpg',
    },
  ];
  newEvent.favoritedBy = [];
  dispatch({ type: actionTypes.LOADING });
  setTimeout(() => {
    dispatch({ type: actionTypes.GET_EVENTS, payload: [newEvent] });
  }, 2000);
};
