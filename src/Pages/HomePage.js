
import { Card,Button, CardActions, CardHeader, CardMedia,BottomNavigation, BottomNavigationAction  } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import {API_URL} from '../config'
function HomePage({categories}) {
    const navigate = useNavigate()
    const params = useParams()
    const [category,setCategories] = React.useState([])
    React.useEffect(()=>{
        if(params.id === undefined) {
            fetchCategories()
        } else {
            filterByCategory(params.id)
        }
    },[params.id])

    async function fetchCategories() {
        try {
          const response = await axios.get(API_URL);
          setCategories(response.data);
        } catch (error) {
          // Handle error
        }
      }
      
      async function filterByCategory(category_id) {
        try {
          const response = await axios.get(`${API_URL}/?category_id=${category_id}`);
          setCategories(response.data);
        } catch (error) {
          // Handle error
        }
      }
      
  return (
    <div>
        
        <BottomNavigation
        showLabels
        >
            {
                categories.map(category=>
                    <BottomNavigationAction 
                        sx={params.id==category.id && {fontWeight:'bold',textDecoration:'underline'}}
                        label={category.name}  
                        onClick={()=>navigate(`/category/${category.id}`)}/>
                )
            }
        </BottomNavigation>
        {categories.map(category=>(
            <Card>
                <CardHeader title={category.name} />
                <CardMedia component="img" height="200" image={category.imageUrl}/>
            </Card>
        ))}
    </div>
  )
}

export default HomePage