const {shell} = require('electron');

exports = module.exports = (app) => ({
	label: 'Help',
	submenu: [
		{
			label: 'Online Documentation',
			click: () => shell.openExternal('https://support.office.com/en-us/outlook'),
		},
		{
			label: 'Github Project',
			click: () => shell.openExternal('https://github.com/mbu147/outlook-for-linux'),
		},
		{
			label: 'Microsoft Outlook Support',
			click:() => shell.openExternal('https://answers.microsoft.com/en-us/msoutlook/forum'),
		},
		{type: 'separator'},
		{
			label: `Version ${app.getVersion()}`,
			enabled: false,
		},
		{role: 'toggledevtools'},
	],
});
