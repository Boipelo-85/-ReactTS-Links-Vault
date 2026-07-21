import { SearchBar } from '../SearchBar/SearchBar'

type PropsSearch = {

    value : string,
    onWordChange : (value : string)  => void

}

export const Header:React.FC<PropsSearch>  = ({value,onWordChange}) => {
    return (

        <>
            <SearchBar value={value}  onChange={onWordChange} />
        </>
    )
}
