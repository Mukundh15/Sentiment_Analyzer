import { useState } from 'react';
import axios from 'axios';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function App() {
  const [text,setText]=useState('');
  const [response,setResponse]=useState('');
  const handleSubmit=async()=>{
    try{
      const res=await axios.post('http://localhost:5000/analyze', { text });
      setResponse(`${res.data.label} (${res.data.score.toFixed(2)})`);
    }catch(err){
      console.error(err);
      setResponse("Error connecting to the server.");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, m: 'auto', mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Sentiment Analyzer
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel htmlFor="input-text">Enter your text</InputLabel>
        <OutlinedInput
          id="input-text"
          label="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <FormHelperText>Type something to analyze its sentiment.</FormHelperText>
      </FormControl>
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Analyze
      </Button>
      {response && (
        <Typography variant="h6" color="secondary" sx={{ mt: 3 }}>
          Result: {response}
        </Typography>
      )}
    </Box>
  );
}

export default App;
