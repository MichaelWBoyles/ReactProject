import sections from '../data/sections.json'
import Nav from 'react-bootstrap/Nav';

export default function AppNav() {

    return(
        <div>
            <Nav>
                {sections.map(section => {
                    return <Nav.Item key={section.label}>
                        <Nav.Link onClick = {() => alert('You have click ' + section.label)}>
                            {section.label}
                        </Nav.Link>
                    </Nav.Item>
                })}
            </Nav>

            {/* <nav>
                {sections.map(section => {
                    return <navitem onClick = {() => alert('You have click ' + section.lable)}>
                        {section.label}
                        </navitem>
                })}
            </nav> */}
        </div>
    )
}