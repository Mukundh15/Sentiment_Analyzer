import React from 'react';
import { Typography, Box } from '@mui/material';

export default function Info() {
  return (
    <Box sx={{ maxWidth: 800, m: 'auto', mt: 5, p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        What is Sentiment Analysis?
      </Typography>

      <Typography variant="body1" paragraph>
        Sentiment Analysis is a Natural Language Processing (NLP) technique used to identify and extract the emotional tone behind words.
        It helps determine whether the sentiment of a given piece of text is positive, negative, or neutral.
      </Typography>

      <Typography variant="body1" paragraph>
        This tool uses a machine learning model to analyze the sentiment of any sentence you enter.
        Whether it's feedback, a review, or a social media comment, the model classifies the emotion behind it.
      </Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>
        💡 Try examples like:
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        - "I love this app!" <br />
        - "This is frustrating." <br />
        - "It's okay, not bad."
      </Typography>
    </Box>
  );
}
