import { CardActions, CardHeader, CardMedia, Typography,Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import {API_URL} from '../config'
function MenuPage() {
    let params = useParams()
    const [singleRecipe,setSingleRecipe] = React.useState({})

    function getRecipe(id) {
        axios.get(`${API_URL}/recipes/${id}`).then(response=>{
            setSingleRecipe(response.data)
        })
    }

    React.useEffect(()=>{
        getRecipe(params.id)
    },[])

  return (
    <div>
        <CardHeader title={singleRecipe.title} subheader={singleRecipe.date}/>
        <CardMedia component="img" height="200" image={singleRecipe.imageUrl}/>
        <Typography variant="body1">{singleRecipe.content}</Typography>
    </div>
  )
}

export default MenuPage