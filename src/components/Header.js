const Header = ({title}) => {
  return (
    <header className="header">
      <h1>SUPERHEROME</h1>
    </header>
  )
}
Header.defaultProps={
    title:'',
}

//css in Js
//const headingStyle = {
//    color: 'red',
//    backgroundColor: 'black'
//}
  //<form>
//     <label>Enter 1st Number:
  //      <input type="text" />
    //  </label>
    //<label>Enter 2nd Number:
    //<input type="text" />
  //</label>
//</form>
export default Header
