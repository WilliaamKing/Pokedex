import React from 'react';
import TextField from '@material-ui/core/TextField';
import FilterIcon from  '@material-ui/icons/FilterList';
import CloseIcon from  '@material-ui/icons/Close';
import FilterForm from './filter_form';
import {makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles (themes => ({
    filterIcon:{
        '&:hover':{
            fill: "red",
            cursor: "pointer"
        }
    },
    filterForm: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeIcon: {
        position: 'absolute',
        left: '95%',
        top: '65px',
        fill: '#ffffff',

        '&:hover':{
            fill: 'red',
            cursor: 'pointer',
        },
    },
}))

export default function SearchingForm ({searchingMethod,filterMethod}){
    const classes = useStyles();

    return(
        <div className = "searching_form">
           <TextField id ="search" fullWidth autocomplete = 'off' placeholder = 'Searching Pokemons' name="search" onChange = {searchingMethod} />
           <FilterIcon className = {classes.filterIcon} onClick = {()=>{document.getElementsByClassName('filter_form')[0].style.display = "block"}}/>

           <div className = "filter_form">
                <div className = {classes.filterForm}>
                    <CloseIcon className = {classes.closeIcon} onClick = {()=>{document.getElementsByClassName('filter_form')[0].style.display = "none"}}/>
                    <FilterForm filterMethod = {filterMethod}/>
                </div>
            </div>

        </div>
    );
}