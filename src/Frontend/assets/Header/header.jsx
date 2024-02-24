import './header.css';

export default function Header() {
    return (
        <div >
            <nav className='header'>
            <h2 className='websiteName'> Discount Bytes</h2>

            <ul className='buttons'>
                <li className='listItem'><a href=''>Login</a></li>
                <li className='listItem'><a href=''>Signup</a></li>
            </ul>
            </nav>
        </div>
    );
}
