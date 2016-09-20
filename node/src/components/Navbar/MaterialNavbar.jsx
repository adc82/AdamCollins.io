import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import MyNavbar from './Navbar';
import { fromJS } from 'immutable';


const className = 'material-nav-link';

class MaterialNavbar extends React.Component {

  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let links = fromJS([
        {
          key: 'nav5',
          title: 'Adam Collins',
          href: '/',
          class: 'title',
          id: 'title'
        },
        {
          key: 'nav4',
          title: 'Contact',
          href: '#',
          class: className,
          id: 'contact'
        },
        {
          key: 'nav3',
          title: 'How',
          href: '#',
          class: className,
          id: 'how'
        },
        {
          key: 'nav2',
          title: 'Blog',
          href: '#',
          class: className,
          id: 'blog'
        },
        {
          key: 'nav1',
          title: 'Story',
          href: '/story',
          class: className,
          id: 'story'
        },
      ]);

    let id = 'material-nav';

    return (
      <MyNavbar
        links={links}
        id={id}
      />
    );
  }
}


export default MaterialNavbar;