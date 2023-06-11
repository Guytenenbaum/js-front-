import { Routes, Route,Link} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import MenuPage from './Pages/MenuPage';
import { AppBar, Toolbar, Box, Typography,Button} from '@mui/material'
import React from 'react'
import axios from 'axios'
import {API_URL} from './config'

function App() {
    const [categories,setCategories] = React.useState([])
    React.useEffect(()=>{
        axios.get(`${API_URL}`).then(response=>{
            setCategories(response.data)  
        })
    },[])
  return (
    <div>
        <Box>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow:1}}>
                        ברוכים הבאים!
                    </Typography>
                    <Button variant="">
                        <Link style={{textDecoration:'none',color:'white'}} to="/show/:id">לצפייה בתפריט</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
        <br/><br/><br/>
        <Routes>
            <Route path="/" element={<HomePage categories={categories}/>}/>
            <Route path="/category/:id" element={<HomePage categories={categories}/>}/>
            <Route path="/show/:id" element={<MenuPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
