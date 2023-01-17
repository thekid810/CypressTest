const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/reports',
	reportPath: 'cypress/reports/cucumberReport',
	metadata:{
        browser: {
            name: '',
            version: ''
        },
        device: 'Local test machine',
        platform: {
            name: '',
            version: ''
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Practice Test'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'C0001'},
        ]
    }
});