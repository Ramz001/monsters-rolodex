import './search-box.styles.css'
import { ChangeEvent } from 'react'

type SearchBoxProps = {
    placeholder: string;
    className: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => {
    return (
        <input 
            className='search'
            type='search' 
            placeholder={placeholder} 
            onChange={handleChange} 
          />
    )
}

export default SearchBox