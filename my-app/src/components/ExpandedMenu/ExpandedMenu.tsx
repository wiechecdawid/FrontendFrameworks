export const ExpandedMenu = () => {
    const menuItems = [ 'Home', 'Publications', 'People', 'Entities', 'Administration' ];
    
    return (
        <ul>
            {menuItems.map( item => 
                <li key={item}>{item}</li>)}
        </ul>
    )
}