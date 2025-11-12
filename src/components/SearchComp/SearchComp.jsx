import React from 'react';
//styles
import "./SearchComp.css";
// assets
import doctorImage from "../../assets/doctor.svg";
import laboratoryImage from "../../assets/laboratory.svg";
import hospitalImage from "../../assets/hospital.svg";
import medicalStore from "../../assets/medical.svg";
import ambulance from "../../assets/ambulance.svg";
//components
import SearchBar from '../SearchBar/SearchBar';
import Card from '../Card/Card';
import { Link, useNavigate } from 'react-router-dom';

const SearchComp = () => {
    const navigate = useNavigate();
    
    //variables
    const cardsImages = [
        {image: doctorImage, text:"doctors"},
        {image: laboratoryImage, text:"labs"},
        {image: hospitalImage, text:"hospitals", customStyle: "cardSelected"},
        {image: medicalStore, text:"medical store"},
        {image: ambulance, text:"ambulance"},
        
    ]
    //functions
    const displayCards = () => cardsImages.map((item, index) => <Card key={index} customStyle={item.customStyle} image={item.image} text={item.text} /> );

    const handleSearchSubmit = () => {
        navigate("/find");
    };

    return (
            <section className='SearchComp'>
                <section className='commonContainer SearchCompBody'>
                    <SearchBar atHomePage={true} onSearchSubmit={handleSearchSubmit}/>
                    <section className='cardsDivWrapper'>
                        <h2>You may be looking for</h2>
                        <nav className='cardsDiv'>
                            {displayCards()}
                        </nav>
                    </section>
                </section>
            </section>
    );
};

export default SearchComp;