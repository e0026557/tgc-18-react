function BorderedImageFrame(props) {
    // Border: red in color, thickness 4px and using solid lines
    let img = <img style={{
      'border': '4px solid red'
    }} src={props.imgSrc} />;
  
    // let img = <img style={{
    //   'border': '4px solid red'
    // }} src={require('/' + props.imgSrc)} />;
    return img;
  }

  export default BorderedImageFrame;