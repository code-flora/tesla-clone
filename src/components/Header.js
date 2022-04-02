import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice'
import { selectSideMenu } from '../features/car/sideMenuSlice';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

function Header(props) {
  //get data from redux store
  const cars = useSelector(selectCars);
  const sideMenuItems = useSelector(selectSideMenu);
  let carMenu;
  let carList;
  let menuList;

  // generating top menu & side menu based on list of car names
  if (cars) {
    carMenu = cars.map((car, index) => {
      return (
        <a href={car.url} key={index} className="hover-class">{car.title}</a>
      )
    })

    carList = cars.map((car, index) => {
      return (
        <li key={index + 11}><a href={car.url}>{car.title}</a></li>
      )
    })
  }

  // generating side menu list
  menuList = sideMenuItems.map((elem, index) => {
    return (
      <li key={index + 31}><a href={elem.url}>{elem.item}</a></li>
    )
  });

  // create event listener for clicking outside menu, on mount only
  let burgerMenuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (burgerMenuRef.current && !burgerMenuRef.current.contains(e.target)) {
        props.closeMenu();
      }
    };
    document.addEventListener("mousedown", handler);
  }, [])

  // generate state for screen size
  const isSmallScreen = useMediaQuery({ query: `(max-width: 1000px)` });

  // if menu opens, blur logo too
  const blurClass = props.burgerStatus ? "blur-header" : "";

  return (
    <Container>
      <Logo className={blurClass}>
        <a href="/"><img src="/images/logo.svg" alt="Tesla Logo" /></a>
      </Logo>
      <Menu className={blurClass}>
        {carMenu}
        <a href="/solarpanel" className="hover-class">Solar Panel</a>
      </Menu>
      <RightMenu>
        {!isSmallScreen ? (
          <>
            <a href="/shop" className="hover-class">Shop</a>
            <a href="/account" className="hover-class">Account</a>
          </>
        ) : ''}
        <CustomMenu onClick={props.openMenu} />
      </RightMenu>
      <BurgerNav show={props.burgerStatus} ref={burgerMenuRef}>
        <CloseWrapper>
          <CustomCloseButton onClick={props.closeMenu} />
        </CloseWrapper>
        <List>
          <ul>
            {isSmallScreen ? carList : ''}
            {menuList}
            {isSmallScreen ? (
              <>
                <li><a href="#">Shop</a></li>
                <li><a href="#">Account</a></li>
              </>) : ''}
          </ul>
        </List>

      </BurgerNav>
    </Container>
  )
}

export default Header

const Container = styled.div`
  padding: 0 20px;
  min-height: 60px;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  a.hover-class {
    padding: 4px 0px;
    margin: 0 8px;
    font-weight: 900;
    text-transform: uppercase;
    flex-wrap: nowrap;
  }
  a.hover-class:first-child{
    margin-left: 0px;
  }
  a.hover-class:last-child{
    margin-right: 0px;
  }
`

const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  min-width: 175px;
  transition: filter 0.3s ease-in;

  img {
    max-width: 150px;
    margin-left: -15px;
  }

  @media (max-width: 1000px){
    min-width: 120px;

    img {
      max-width: 120px;
    }
  }
`

const Menu = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  font-size: 0.8em;
  letter-spacing: 1px;
  transition: filter 0.3s ease-in;

  @media(max-width: 1000px) {
    display: none;
  }
  `
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  letter-spacing: 1px;
`
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-left: 8px;
  margin-right: 10px;
`

const BurgerNav = styled.div`
  text-align: start;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  padding: 20px;
  background: white;
  transform: ${props => props.show ? `translateX(0)` : `translateX(100%)`};
  transition: transform 0.3s ease-in-out;

  ul {
    list-style-type: none;
  }
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }
  li:first-child{
    padding-top: 0px;
  }
  a {
    text-decoration: none;
    font-weight: 700;
  }
`
const CustomCloseButton = styled(CloseIcon)`
  cursor: pointer;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const List = styled.div`
  padding-bottom: 40px;
  height: 100%;
  position: relative;
  top: 20px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; 
  ::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
}
`