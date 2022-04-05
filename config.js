// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'den',
	imageBackground: false,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Sarapan dulu',
	greetingAfternoon: 'Jangan lupa makan',
	greetingEvening: 'Lembur ga bikin kaya',
	greetingNight: 'Jangan begadang',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '5303940441dedb0179d0c18cf59e8734', // Write here your API Key
	weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'id', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '37.775',
	defaultLongitude: '-122.419',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Localhost',
			icon: 'server-crash',
			link: 'http://laradock.test',
		},
		{
			id: '2',
			name: 'Phpmyadmin',
			icon: 'database',
			link: 'http://laradock.test:8081',
		},
		{
			id: '3',
			name: 'Simrs',
			icon: 'activity',
			link: 'http://simrs.rsymc.com',
		},
		{
			id: '4',
			name: 'Whatsapp',
			icon: 'message-circle',
			link: 'https://web.whatsapp.com',
		},
		{
			id: '5',
			name: 'Teams',
			icon: 'users',
			link: 'https://teams.microsoft.com',
		},
		{
			id: '6',
			name: 'Clickup',
			icon: 'trello',
			link: 'https://app.clickup.com/3644313/v/b/sh/2',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Localhost',
			icon: 'server',
			link: 'http://laradock.test',
		},
		{
			id: '2',
			name: 'Phpmyadmin',
			icon: 'database',
			link: 'http://laradock.test:8081',
		},
		{
			id: '3',
			name: 'Clinic',
			icon: 'cross',
			link: 'http://clinic.test',
		},
		{
			id: '4',
			name: 'Crm',
			icon: 'alert-triangle',
			link: 'http://crm.test',
		},
		{
			id: '5',
			name: 'Pos',
			icon: 'package',
			link: 'http://pos.test',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'server',
			id: '1',
			links: [
				{
					name: 'Medify',
					link: 'http://medify.test',
				},
				{
					name: 'Clinic',
					link: 'http://clinic.test',
				},
				{
					name: 'CRM',
					link: 'http://crm.test',
				},
				{
					name: 'POS',
					link: 'http://pos.test',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Medify',
					link: 'https://github.com/medifyid/medifyhospital',
				},
				{
					name: 'Clinic',
					link: 'https://github.com/adenanteng/clinic',
				},
				{
					name: 'CRM',
					link: 'https://github.com/adenanteng/crm',
				},
				{
					name: 'POS',
					link: 'https://github.com/adenanteng/pos',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
