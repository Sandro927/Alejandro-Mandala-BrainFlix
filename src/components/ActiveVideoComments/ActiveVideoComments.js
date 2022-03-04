import { Component } from 'react'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'
import Comment from '../Comment/Comment'
import './ActiveVideoComments.scss'
import AddCommentIcon from '@mui/icons-material/AddComment';
import axios from 'axios'
const API_KEY = "a10e75f8-75fb-4de7-857f-8aa90025dc69";
class ActiveVideoComments extends Component {

  state = {
    newComment: ""
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const comment = e.target.newComment.value;
    if (comment) {
      const URL = `https://project-2-api.herokuapp.com/videos/${this.props.activeVideoData.id}/comments?api_key=${API_KEY}`
      axios.post(URL, {
        name: "Brainstation man",
        comment: comment
      })
        .then(response => {
          this.setState({
            newComment: ""
          }, () => this.props.fetchVideoData(this.props.activeVideoData.id));
        })
        .catch(err => {
        })
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { activeVideoData } = this.props;
    return (
      <section className="comments">
        <p className="comments__counter">{`${activeVideoData.comments.length} Comments`}</p>
        <div className="comments__new">
          <img className="comments__avatar" src={avatar} alt="avatar" />
          <form className="comments__form" onSubmit={this.handleSubmit}>
            <div className="comments__input">
              <label className='comments__label' htmlFor='newComment'>JOIN THE CONVERSATION</label>
              <textarea className="comments__textarea" id="newComment" name="newComment" rows="5" placeholder="Add a new comment" value={this.state.newComment} onChange={this.handleChange} />
            </div>
            <button className="comments__button" type="submit">
              <AddCommentIcon className="comments__icon" />COMMENT
            </button>
          </form>
        </div>
        {
          activeVideoData.comments.map((comment, index) =>
            <Comment
              comment={comment}
              key={comment.id}
              lastComment={index === activeVideoData.comments.length - 1 ? true : false}
              activeVideoData={this.props.activeVideoData}
              fetchVideoData={this.props.fetchVideoData}
            />
          )
        }
      </section>
    )
  }
}

export default ActiveVideoComments