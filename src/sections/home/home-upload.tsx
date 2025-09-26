import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { BoltOutlined } from '@mui/icons-material';

export const HomeUpload: React.FC = () => {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    let streetViewUrl = '';

    // NOTE: Replace 'AIzaSyAeUulC2CONqw3EFcB-e1KlW3N-dfu7Gmc' with your actual Google Maps API Key
    const GOOGLE_MAPS_KEY = 'AIzaSyAeUulC2CONqw3EFcB-e1KlW3N-dfu7Gmc'; 

    try {
      // Geocode the address
      const geoRes = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${GOOGLE_MAPS_KEY}`
      );
      const geoData = await geoRes.json();

      if (geoData.status === 'OK' && geoData.results.length > 0) {
        const { lat, lng } = geoData.results[0].geometry.location;
        streetViewUrl = `https://maps.googleapis.com/maps/api/streetview?size=800x400&location=${lat},${lng}&fov=80&heading=70&pitch=0&key=${GOOGLE_MAPS_KEY}`;
        setImageUrl(streetViewUrl);
      } else {
        setImageUrl(null);
        alert('Address not found. Please try again.');
      }
    } catch (err) {
      setImageUrl(null);
      alert('Error fetching image.');
    }

    // Send to Formspree silently
    if (address) {
      try {
        // ⚠️ IMPORTANT: Replace 'xbjnoprq' with your actual Formspree Form ID
        // The original URL 'https://formspree.io/f/inquirezach@gmail.com' was incorrect.
        await fetch('https://formspree.io/f/xblzlejq', { 
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            address,
          }),
        });
      } catch (err) {
        console.error('Formspree request failed:', err);
      }
    }

    setLoading(false);
  };

  return (
    <Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
        <Typography variant="h4" sx={{ mr: 1 }}>
          See Your Home With Permanent Lighting!
        </Typography>
        <Box
          sx={{
            background: '#006affff',
            color: '#fff',
            fontWeight: 700,
            fontSize: 12,
            borderRadius: 8,
            px: 1.5,
            py: 0.5,
            ml: 1,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          <SvgIcon sx={{ fontSize: 16, mr: 0.5 }}>
            <BoltOutlined />
          </SvgIcon>
          BETA
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ mr: 1 }}>
          Type in the address and we'll use AI to generate an image of your home with permanent lighting
          solutions.
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center' }}>
        <TextField
          label="Enter your address"
          variant="outlined"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          sx={{ width: '100%', maxWidth: 400 }}
        />
        <Button
          variant="contained"
          onClick={handleSearch}
          disabled={!address || loading}
          sx={{
            ml: 1,
            backgroundColor: '#006aff',
            color: '#fff',
            '&:hover': { backgroundColor: '#0050c7' },
          }}
        >
          {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Show My Home'}
        </Button>
      </Box>

      {imageUrl && (
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <img
            src={imageUrl}
            alt="Your home preview"
            style={{ maxWidth: '100%', borderRadius: 12, boxShadow: '0 4px 24px rgba(0,0,0,0.12)' }}
          />
        </Box>
      )}
    </Box>
  );
};