import Header from "../organisms/Header"
import Footer from "../organisms/Footer"

const MainTemplates = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default MainTemplates