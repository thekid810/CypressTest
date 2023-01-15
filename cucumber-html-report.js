const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/cucumberReports',
	reportPath: 'cypress/cucumberReports/report',
	metadata:{
        browser: {
            name: 'chrome',
            version: '108'
        },
        device: 'Local test machine',
        platform: {
            name: 'MacOS',
            version: '12.5'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            {label: 'Project', value: 'Practice Test'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Jan 15th 2023, 02:31 PM EST'},
            {label: 'Execution End Time', value: 'Jan 15th 2013, 02:56 PM EST'}
        ]
    }
});