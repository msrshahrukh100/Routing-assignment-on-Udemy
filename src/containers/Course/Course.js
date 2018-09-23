import React, { Component } from 'react';

class Course extends Component {
    state = {
      courseName: null,
      courseId: null
    }

    componentDidMount() {
      const query = new URLSearchParams(this.props.location.search);
      for (let param of query.entries()) {
          this.setState({
            courseName: param[1],
            courseId: this.props.match.params.id
          }) // yields ['start', '5']
      }
      // console.log(this.props)
    }

    componentDidUpdate() {
      const query = new URLSearchParams(this.props.location.search);
      console.log(this.props.match.params.id)
      console.log(this.state.courseId)
      if(this.props.match.params.id !== this.state.courseId) {
        for (let param of query.entries()) {
          this.setState({
            courseName: param[1],
            courseId: this.props.match.params.id
          }) // yields ['start', '5']
        }
      }
      // console.log(this.props)
    }

    render () {
        return (
            <div>
              <p>Somehitng</p>
                <h1>{this.state.courseName}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;
