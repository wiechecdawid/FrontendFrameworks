import styled from 'styled-components';

const Input = styled.input`
    border: 2px solid #031f36;
    border-radius: 15px;
    min-width: 30vw;

    &:focus {
        outline: none !important;
        border: 2px solid green;
    }
`

export const SearchBar = () => (
    <Input placeholder="search" />
)