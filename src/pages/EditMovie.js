import React, { Component } from "react";

import { MovieForm, Loading } from "../components";
import * as movieAPI from "../services/movieAPI";
import { Redirect } from "react-router-dom";

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "loading",
      shouldRedirect: false,
      movie: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(updatedMovie) {
    movieAPI.updateMovie(updatedMovie).then((response) => {
      this.setState({
        shouldRedirect: true,
      });
    });
  }

  componentDidMount() {
    movieAPI.getMovie(this.props.match.params.id).then((response) => {
      this.setState({
        status: "loaded",
        movie: response,
      });
    });
  }

  render() {
    const { status, shouldRedirect, movie } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/" />;
    }

    if (status === "loading") {
      return <Loading />;
    }

    return (
      <div data-testid="edit-movie">
        <MovieForm movie={movie} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default EditMovie;
