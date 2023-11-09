const Home = () => {
    const isi = "Hello React Developer"
    const itemNavbar = ['Home', 'Profile', 'About']
    const author = "PeTIK Jombang"
    const isi_2 = "React Developer adalah seorang pengembang frontend"
    return(
        <div>
            <Navbar itemNavbar={itemNavbar}/>
            <Hero a={isi} b={isi_2}/>
            <Footer a={author}/>
        </div>
    )
}

const Hero = (props) => {
    const data = props.a
    const data_2 = props.b
    return(
        <div>
            <h4>{data}</h4>
            <h5>{data_2}</h5>
        </div>
    )
}

const Navbar = (props) => {
   const {itemNavbar} = props
    return(
        <div>
            <ul>
                {
                    itemNavbar.map((item) => <li>{item}</li>)
                }
            </ul>
        </div>
    )
}

const Footer = (props) => {
    const author = props.a
    return(
        <div>
            <h5>Copyright by {author}</h5>
        </div>
    )
}

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement)

root.render(<Home />)
