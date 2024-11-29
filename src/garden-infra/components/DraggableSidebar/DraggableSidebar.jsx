import React from 'react';
import Draggable from 'react-draggable';

import './DraggableSidebar.scss';

const SIDEBAR_DEFAULT_WIDTH = 545;

export class DraggableSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarDragX: 0,
      draggingBtnRight: this.getDraggingBtnRight(),
      sidebarWidth: this.getSideBarDefaultWidth(),
    };
  }

  //THIS PART MAKING DEFAULT WIDTH DYNAMIC
  getSideBarDefaultWidth = () => {
    if (this.props.defaultWidth) {
      return this.props.defaultWidth;
    }
    return SIDEBAR_DEFAULT_WIDTH;
  };

  getDraggingBtnRight = () => {
    return this.getSideBarDefaultWidth() + 6;
  };
  //==========================

  handleSideBarDragStart = (e, data) => {
    this.setState({
      sidebarDragging: true,
      sidebarDragX: data.x,
      draggingBtnRight: this.getDraggingBtnRight(),
    });
  };

  handleSideBarDrag = (e, data) => {
    this.setState({sidebarDragX: data.x});
  };

  handleSideBarDragStop = (e, data) => {
    this.setState({
      sidebarDragging: false,
      sidebarDragX: data.x,
    });
  };

  render() {
    const {sidebarWidth} = this.state;
    let detailsWidth = sidebarWidth - this.state.sidebarDragX;
    const {className} = this.props;

    return (
      <div className="draggable-sidebar-container" style={{width: detailsWidth, minWidth: detailsWidth}}>
        <div className={`container-in ${className}`}>
          <Draggable
            axis="x"
            onStart={this.handleSideBarDragStart}
            onDrag={this.handleSideBarDrag}
            onStop={this.handleSideBarDragStop}
          >
            <button
              className={this.state.sidebarDragging ? 'btn-drag-dragging' : 'btn-drag'}
              style={{right: this.state.draggingBtnRight}}
            ></button>
          </Draggable>
          {this.props.children}
        </div>
      </div>
    );
  }
}
