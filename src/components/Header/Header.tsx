import { SearchBar } from '../SearchBar/SearchBar'

type PropsSearch = {

    value : string,
    onWordChange : (value : string)  => void
    onAddClick: () => void
}

export const Header:React.FC<PropsSearch>  = ({value,onWordChange,onAddClick}) => {
    return (

        <>
            <SearchBar value={value}  onChange={onWordChange} onAddClick={onAddClick} />
        </>
    )
}
