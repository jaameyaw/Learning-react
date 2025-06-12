
export default function TabButton ({children, isSelected, ...rest}) {
    return (
        <li><button className= {isSelected ? 'active' : null} {...rest}>{children}</button></li>
    )
}