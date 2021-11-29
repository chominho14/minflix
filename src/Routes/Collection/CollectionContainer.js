import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { moviesApi } from "../../api";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname },
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isCollection: pathname.includes("/collection/"),
    };
    console.log(props);
  }

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
      history: { push },
    } = this.props;
    const { isCollection } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }
    let result = null;
    try {
      if (isCollection) {
        ({ data: result } = await moviesApi.collection(parseId));
      }
    } catch {
      this.setState({ error: "Can't find anyting" });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    console.log(result);
    return (
      <CollectionPresenter result={result} error={error} loading={loading} />
    );
  }
}
