import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import { selectCars } from '../features/car/carSlice';
import { selectOtherItems } from '../features/car/otherItemSlice';
import { useSelector } from 'react-redux';

function Home(props) {
    const cars = useSelector(selectCars);
    const menuIsOpen = props.menuOpen ? "menu-open" : "";

    let allCars = cars.map((car, index) => {
        return (
            <Section
                key={index + 7}
                title={car.title}
                description={car.description}
                imageUrl={car.image}
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
        );
    });

    const extraItems = useSelector(selectOtherItems);

    let otherItems = extraItems.map((item, index) => {
        return (
            <Section
                key={index + 17}
                title={item.title}
                description={item.description}
                imageUrl={item.image}
                leftBtnText={item.leftButtonText}
                rightBtnText={item.rightButtonText}
            />
        )
    })
    return (
        <Container className={menuIsOpen}>
            {allCars}
            {otherItems}
        </Container >
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    overflow-x: hidden;

    section {
        scroll-snap-align: start;
    }
`