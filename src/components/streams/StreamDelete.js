import React from 'react';
import Modal from '../Modal'
import { Link } from 'react-router-dom'
import { fetchStream ,deleteStream } from '../../actions'
import { connect } from 'react-redux'


class StreamDelete extends React.Component{
  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }
  renderActions(){
    const { id } = this.props.match.params
    return(
      <React.Fragment>
      <button onClick = {() => this.props.deleteStream(id)} className = " ui button negative">Delete</button>
      <Link to ="/" className = " ui button ">Cancel</Link>
      </React.Fragment>
    )
  }
  render(){
    if (!this.props.stream){
      return <div>Loading...</div>
    }
    return(
      <div>
      StreamDelete
      <Modal
      title = {this.props.stream.title}
      content = {this.props.stream.description}
      actions = {this.renderActions()}
      />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps)=>{
  return {stream : state.streams[ownProps.match.params.id]};

}


export default connect(mapStateToProps ,
  {fetchStream , deleteStream}
)(StreamDelete)
