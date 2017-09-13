const headerStyle = {
    fontFamily: "Arial",
    fontSize: 50,
    color: "gray",
    textAlign: "center"
}

const imageStyle = {
    width: 300,
    display: "block",
    margin: "auto"
}

const Header = () => (
    <div>
        <h1 style={headerStyle}>WORK WITH API GITHUB!</h1>
        <img style={imageStyle} src={"http://www.oit.uci.edu/wp-content/uploads/Octocat.png"}/>
    </div>
)

export default Header