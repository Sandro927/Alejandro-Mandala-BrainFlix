import {Component} from 'react'
import avatar from '../../assets/images/images/Mohan-muruge.jpg'
import Comment from '../Comment/Comment'
import './ActiveVideoComments.scss'
import AddCommentIcon from '@mui/icons-material/AddComment';

class ActiveVideoComments extends Component {


  state = {
    newComment: ""
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log('submitted', e.target.newComment.value)
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
          <img className="comments__avatar" src={avatar} alt="avatar"/>
          <form className="comments__form" onSubmit={this.handleSubmit}>
            <div className="comments__input">
              <label className='comments__label' htmlFor='newComment'>JOIN THE CONVERSATION</label>
              <textarea className="comments__textarea" id="newComment" name="newComment" rows="5" placeholder="Add a new comment" value={this.state.newComment} onChange={this.handleChange}/>
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
              key={`${activeVideoData.id}-${index}`} 
              lastComment={index === activeVideoData.comments.length - 1 ? true : false} 
            />
          )
        }
      </section>
    )
  }
}

export default ActiveVideoComments