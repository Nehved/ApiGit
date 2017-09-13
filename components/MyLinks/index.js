import Link from 'next/link'

const linkStyle = {
    fontFamily: "Arial",
    fontSize: 18,
    textDecoration: "none",
    color: "black"
}

const divStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    marginTop: 60,
    marginBottom: 100
}

const MyLinks = () => (
    <div style={divStyle}>
        <Link href="/myapi">
            <a style={linkStyle}>Информация обо мне</a>
        </Link>
        <Link href="/userapi">
            <a style={linkStyle}>Информация об Евгении</a>
        </Link>
        <Link href="/search">
            <a style={linkStyle}>Поиск пользователей</a>
        </Link>
        <style jsx>{`
            a:hover {
                opacity: 0.6;
            }
        `}</style>
    </div>
)

export default MyLinks