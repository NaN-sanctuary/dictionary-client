import './SearchBar.css';

const SearchBar = () => {
    const searchWebsite = () => {
        console.log('hello');
    };
    return (
        <div className="search-root">
            <input className="search" onKeyUp={searchWebsite} type="search" id="search" name="search" placeholder="Пошук"></input>
        </div>
    )
}

export default SearchBar;