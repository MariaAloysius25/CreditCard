import Header from "../components/Header";

//Not Found Page
function NotFound(): JSX.Element{
    return(
        <>
            <Header />
            <div className="not-found">Oops... page not found</div>
        </>
    )
}

export default NotFound;