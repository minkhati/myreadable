import { 
  getAllCategories,
  addNewPost,
} from '../utils/ReadableAPI'

const GET_CATEGORIES = 'GET_CATEGORIES'
const ADD_NEW_POST = 'ADD_NEW_POST'


export const getCategories = (categories) => ({
    type: GET_CATEGORIES,
    categories
})

export const fetchCategories = () => dispatch => (
  getAllCategories()
    .then(categories => dispatch(getCategories(categories)))
)

export const addNewPostAction = (post) => dispatch => (
  addNewPost(post)
    .then(post => {
      dispatch({
        type: ADD_NEW_POST,
        post
      })
    })
)


