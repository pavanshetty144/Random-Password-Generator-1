import { Box } from "@mui/material";
import "./App.css";
import PasswordGenerator from "./components/PasswordGenerator/PasswordGenerator";
import Typography from "@mui/material/Typography";

function App() {
  return (
  <>
  
        
      
    <Box className="App" >
      
    <Box
     sx={{ position:"fixed",
    top:0,width:"100%",zIndex:9}}
     >
          <Typography
            sx={{
              backgroundColor: "blue",
              color: "white",
              padding: "15px",
              textAlign: "left",
            }}
            variant="h4"
          >
            Random Password Generator
          </Typography>
          <PasswordGenerator  style={{overflow:"scroll"}}/>
        </Box>
        
   

  
        </Box>
   
  </>
     
    
  );
}

export default App;
