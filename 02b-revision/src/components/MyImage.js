function MyImage(props) {
    return (
      <img src={require("../puppy.jpg")} 
      alt="Some picture"
      style={
        {
          'borderWidth': '1px',
          'borderStyle': 'solid',
          'borderColor': props.borderColor
        }
      } />
    )
  }

  export default MyImage;