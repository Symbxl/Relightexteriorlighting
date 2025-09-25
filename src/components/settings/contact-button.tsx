import type { FC } from 'react';
import ContactIcon from '@untitled-ui/icons-react/build/esm/Send01';
import { Box, ButtonBase, SvgIcon, Tooltip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const ContactButton: FC = () => {
	const navigate = useNavigate();
	return (
		<Tooltip title="Contact">
			<Box
				sx={{
					backgroundColor: 'background.paper',
					borderRadius: '50%',
					bottom: 0,
					boxShadow: 16,
					margin: (theme) => theme.spacing(4),
					position: 'fixed',
					right: 80,
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
					onClick={() => navigate('/contact')}
				>
					<SvgIcon>
						<ContactIcon />
					</SvgIcon>
				</ButtonBase>
			</Box>
		</Tooltip>
	);
};
