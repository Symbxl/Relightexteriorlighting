import type { FC } from 'react';
import ContactIcon from '@untitled-ui/icons-react/build/esm/Send01';
import PhoneIcon from '@untitled-ui/icons-react/build/esm/Phone';
import { Box, ButtonBase, SvgIcon, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ContactButton: FC = () => {
	const navigate = useNavigate();
	const isContactPage = window.location.pathname === '/contact';
	return (
		<Tooltip title={isContactPage ? "Call" : "Contact"}>
			<Box
				sx={{
					backgroundColor: 'background.paper',
					borderRadius: '50%',
					bottom: 0,
					boxShadow: 16,
					margin: (theme) => theme.spacing(4),
					position: 'fixed',
					right: { xs: 16, sm: 32, md: 80 },
					zIndex: (theme) => theme.zIndex.speedDial
				}}
			>
				<ButtonBase
					sx={{
						backgroundColor: 'primary.main',
						borderRadius: '50%',
						color: 'primary.contrastText',
						p: '10px'
					}}
					onClick={() => {
						if (isContactPage) {
							window.location.href = 'tel:+14254651290';
						} else {
							navigate('/contact');
						}
					}}
				>
					<SvgIcon>
						{isContactPage ? <PhoneIcon /> : <ContactIcon />}
					</SvgIcon>
				</ButtonBase>
			</Box>
		</Tooltip>
	);
};
