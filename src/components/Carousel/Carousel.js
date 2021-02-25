import React from "react";

import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: require("assets/img/bg2.jpg"),
    altText: '',
    caption: '',
    header: ''
  },
  {
    src: require("assets/img/bg3.jpg"),
    altText: '',
    caption: '',
    header: ''
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={items} />
      </>
    );
  }
}

export default Carousel;