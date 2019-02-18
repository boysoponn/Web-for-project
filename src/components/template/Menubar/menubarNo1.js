import React from 'react';
import { Menu } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Menubar extends React.Component {
  state = {
  }

  render() {
  
  
    return (
      <div style={{backgroundColor:this.props.menubarbackgroundColor,position:'relative'}}>
      <Menu
      mode="horizontal"
        selectedKeys={[this.state.current]}   
      >
      {this.props.menubarItem.map((menubar) => 
      menubar.typeGroup === true ?
        <SubMenu key={menubar._key} title={<span className="submenu-title-wrapper">{menubar.label}</span>}>
          <MenuItemGroup>
           {/* {post.group._key||this.state.h.map((pgg) => 
          <Menu.Item >
          <a href="https://ant.design"  target="_blank" rel="noopener noreferrer2">{pgg.label}</a>
          </Menu.Item>
          )}  */}
          {/* {Object.keys(post.group).map((key,index) => {
                    <Menu.Item >
                    <h1>lkpll</h1>
                    </Menu.Item>
          })} */}
          </MenuItemGroup>
        </SubMenu>
        :
        <Menu.Item key={menubar._key}>
          {menubar.link ?
          <a href={menubar.link} target={menubar.linkTarget} rel="noopener noreferrer"
          style={{
            color:menubar.Color,
            animationDuration: menubar.Duration,
            fontFamily:menubar.FontFamily,
            fontSize:menubar.FontSize,
            fontWeight:menubar.FontWeight,
            fontStyle:menubar.FontStyle,
            display:menubar.Status
         }}
          >{menubar.label}</a>
          :
          <a
          style={{
            color:menubar.Color,
            animationDuration: menubar.Duration,
            fontFamily:menubar.FontFamily,
            fontSize:menubar.FontSize,
            fontWeight:menubar.FontWeight,
            fontStyle:menubar.FontStyle,
            display:menubar.Status
         }}
          >{menubar.label}</a>
          }
        </Menu.Item>
      )}
      </Menu>
      </div>
    );
  }
}
export default Menubar;
