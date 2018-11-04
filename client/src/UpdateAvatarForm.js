import React, { Component } from 'react';
import { connect } from 'react-redux';

class UpdateAvatarForm extends Component {
  addImage(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    // console.log(this)
    // debugger
    fetch('http://localhost:3000/api/v1/users/me', {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${this.props.token}`
      },
      body: data
    })
      .then((resp) => resp.json())
      .then(data => console.log(data));
    this.props.handleClose();
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.addImage(e)}>
          <input type="file" name="image" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.token
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setAvatarURL: (url) => {
      dispatch({ type: 'SETAVATARURL', payload: url });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateAvatarForm);
