import css from './SearchBox.module.css';

export default function SearchBox({search, onSearch}) {
    return (
        <div className={css.searchBox}>
            <input
                type='text'
                value={search}
                onChange={event => onSearch(event.target.value)}
            />
        </div>
    );
}