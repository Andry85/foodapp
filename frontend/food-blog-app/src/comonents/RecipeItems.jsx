import React from 'react'
import { useLoaderData } from 'react-router-dom';
import foodImg from '../assets/foodRecipe.png';
import { BsStopwatchFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import axios from 'axios';

export default function RecipeItems() {
    const allRecipes = useLoaderData();
    console.log(allRecipes);
    return (
        <>
            <div className='card-container'>
                {
                    allRecipes?.map((item, index)=> {
                        return(
                            <div key={index} className='card'>
                                <img src={foodImg} width="120" height="100" />
                                <div className='card-body'>
                                    <div className='title'>{item.title}</div>
                                     <div className='icons'>
                                        <div className='timer'><BsStopwatchFill />{item.time}</div>
                                        <FaHeart/>
                                     </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
