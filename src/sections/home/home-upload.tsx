import { SvgIcon } from '@mui/material';
import React, { useState } from 'react';
import { Box, Button, TextField, Typography, CircularProgress } from '@mui/material';
import { BoltOutlined, BoltSharp } from '@mui/icons-material';
export const HomeUpload: React.FC = () => {
	const [address, setAddress] = useState('');
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState<string | null>(null);

	const handleSearch = () => {
		setLoading(true);
		// Simulate API call
		setTimeout(() => {
			// For demo, always show the same image
			setImageUrl('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80');
			setLoading(false);
		}, 1500);
	};

	return (
		<Box sx={{ py: 8, px: 2, textAlign: 'center' }}>
			<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
				<Typography variant="h4" sx={{ mr: 1 }}>
					See Your Home With Permanent Outdoor Lights
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
						gap: 0.5
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
					Upload a photo of your home and we'll use Ai to generate an image of permanent lighting solutions.
			</Typography>
            </Box>
			<Box sx={{ display: 'flex', alignItems: 'center', mb: 4, justifyContent: 'center' }}>
				<TextField
					label="Enter your address"
					variant="outlined"
					value={address}
					onChange={e => setAddress(e.target.value)}
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
						'&:hover': { backgroundColor: '#0050c7' }
					}}
				>
					{loading ? <CircularProgress size={24} /> : 'Show My Home'}
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
