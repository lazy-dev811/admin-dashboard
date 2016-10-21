import {
  UPDATE_WIDGET_CONFIG,
} from './actions';


//TODO NO LONGER HOOKED UP



// import widgetBlog from '../../Blog/redux/reducer';

const INITIAL_STATE = {
  // data: {
  //   blogPosts: [],
  //   activePost: undefined,
  // },
  // config: {
  //   components: {
  //     body: true,
  //   },
  //   dimensions: {
  //     width: 300,
  //     height: 300,
  //   },
  //   position: {
  //     bottom: 100,
  //     left: 40,
  //   },
  //   transparentScrollbar: true,
  //   displaySettings: true,
  // },
  lol: 'dfdsfds',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_WIDGET_CONFIG: {
      console.log('in action', action.widgetConfig.key, action.widgetConfig.value);
      // console.log(widgetBlog());
      return {
        ...state,
        lol: 'BOOOM',
        // data: {
        //   blogPosts: action.blogPosts.data,
        // },
      };
    }

    default: {
      return state;
    }
  }
};
