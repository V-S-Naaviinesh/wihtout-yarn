const INITIAL_STATE ={
    sections: [ {
        title : 'hats',
        imageUrl:'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 1,
        linkUrl: 'shop/hats'

   },
   {
       title : 'jackets',
        imageUrl:'https://images.pexels.com/photos/16170/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 2,
        linkUrl: 'shop/jackets'
   },
   {
       title : 'sneakers',
        imageUrl:'https://images.pexels.com/photos/1032110/pexels-photo-1032110.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 3,
        linkUrl: 'shop/sneakers'
   },
   {
       title : 'womens',
        imageUrl:'https://images.pexels.com/photos/3919307/pexels-photo-3919307.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size:'large',
        id: 4,
        linkUrl: 'shop/womens'
   },
   {
       title : 'mens',
        imageUrl:'https://images.pexels.com/photos/3911274/pexels-photo-3911274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        size:'large',
        id: 5,
        linkUrl: 'shop/mens'
   }]
 
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: return state;
    }
}

export default directoryReducer;