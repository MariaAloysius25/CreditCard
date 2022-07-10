import '../App.css';
import NavMenu from './Menu';

//Header
function Header(){
    return (<>
        <div className="App-header" style={{ width: '100%'}}>
            <div className="header-text">Credit Card Registration</div>
            <div  className="menu">
                <NavMenu />
            </div>
        </div>
    </>);
}

export default Header;