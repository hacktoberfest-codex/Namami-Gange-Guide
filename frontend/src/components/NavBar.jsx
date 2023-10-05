import { useEffect, useState } from 'react';
import { createStyles, Header, Container, Group, Burger, Paper, Transition, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate } from 'react-router-dom';

const HEADER_HEIGHT = rem(80);

const useStyles = createStyles(theme => ({
	root: {
		position: 'relative',
		zIndex: 1
	},

	dropdown: {
		position: 'absolute',
		top: HEADER_HEIGHT,
		left: 0,
		right: 0,
		zIndex: 0,
		borderTopRightRadius: 0,
		borderTopLeftRadius: 0,
		borderTopWidth: 0,
		overflow: 'hidden',

		[theme.fn.largerThan('sm')]: {
			display: 'none'
		}
	},

	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%'
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			display: 'none'
		}
	},

	burger: {
		[theme.fn.largerThan('sm')]: {
			display: 'none'
		}
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: `${rem(8)} ${rem(12)}`,
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0]
		},

		[theme.fn.smallerThan('sm')]: {
			borderRadius: 0,
			padding: theme.spacing.md
		}
	},

	linkActive: {
		'&, &:hover': {
			backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
			color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color
		}
	}
}));

const links = [
	{
		link: '/riverine_ecology',
		label: 'Riverine Ecology'
	},
	{
		link: '/navigation',
		label: 'Navigation'
	},
	{
		link: '/warRoom_museum',
		label: 'WarRoom'
	}
];

const NavBar = () => {
	const [opened, { toggle, close }] = useDisclosure(false);
	const [active, setActive] = useState(links[0].link);
	const { classes, cx } = useStyles();

	const items = links.map(link => (
		<Link
			key={link.label}
			to={link.link}
			className={cx(classes.link, { [classes.linkActive]: active === link.link })}
			onClick={() => {
				setActive(link.link);
				close();
			}}>
			{link.label}
		</Link>
	));
	const navigate = useNavigate();
	const handleClick=()=>{
		navigate('/home');
	}
	return (
		<Header height={HEADER_HEIGHT} className={classes.root}>
			<Container className={classes.header}>
				<img className='w-16 h-16 cursor-pointer' src='https://nmcg.nic.in/images/nmcgGif.gif' alt='NMCG' onClick={handleClick}/>:
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>

				<Burger opened={opened} onClick={toggle} className={classes.burger} size='sm' />

				<Transition transition='pop-top-right' duration={200} mounted={opened}>
					{styles => (
						<Paper className={classes.dropdown} withBorder style={styles}>
							{items}
						</Paper>
					)}
				</Transition>
			</Container>
		</Header>
	);
};

export default NavBar;
