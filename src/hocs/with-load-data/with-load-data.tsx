import * as React from "react";

interface InjectedProps {
  isRequiredDataLoad: boolean,
  onLoadData: any,
}

const withLoadData = (Component) => {
  class WithLoadData extends React.PureComponent<InjectedProps> {
    componentDidMount() {
      this._onRequiredLoadData();
    }

    componentDidUpdate() {
      this._onRequiredLoadData();
    }

    _onRequiredLoadData() {
      const {isRequiredDataLoad, onLoadData} = this.props;

      if (isRequiredDataLoad) {
        onLoadData();
      }
    }

    render() {
      return this.props.isRequiredDataLoad ? <h1>Loading...</h1> : <Component {...this.props}/>;
    }
  }


  return WithLoadData;
};

export default withLoadData;
