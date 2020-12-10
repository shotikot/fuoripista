import React from 'react';

class CursorFollower extends React.Component {
  state = {
    xMain: 0,
    yMain: 0,
    xTrailing: 0,
    yTrailing: 0,
  };

  handleMouseMove = e => {
    const { clientX, clientY } = e;
    this.setState(
      {
        xMain: clientX,
        yMain: clientY,
      },
      () => {
        setTimeout(() => {
          this.setState({
            xTrailing: clientX,
            yTrailing: clientY,
          });
        }, 100);
      }
    );
  };

  render = () => {
    const { xMain, yMain, xTrailing, yTrailing } = this.state;

    return (
      <div className="container" onMouseMove={e => this.handleMouseMove(e)}>
        <div className="cursors">
          <div
            className="cursor"
            style={{
              left: xMain,
              top: yMain,
            }}
          />
          <div
            className="cursor"
            style={{
              left: xTrailing,
              top: yTrailing,
            }}
          />
        </div>
        {this.props.children}
      </div>
    );
  };
}

export default CursorFollower;