// https://github.com/addyosmani/puppeteer-webperf
const puppeteer = require('puppeteer');


async function start() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	// Drag and drop this JSON file to the DevTools Performance panel!
	await page.tracing.start({path: 'profile.json'});
	await page.goto('https://www.facebook.com/');
	await page.tracing.stop();
	await browser.close();
}

start();