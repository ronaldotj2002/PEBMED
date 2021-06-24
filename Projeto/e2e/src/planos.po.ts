import { browser, by, element } from 'protractor'

export class Planos {
    
    navigateTo() {
        return browser.get(`${browser.baseUrl}/planos`);
    }

    getWindowTitle() {
        return browser.getTitle();
    }

    getlistaPlanos () {
        return element
            .all(by.css('.grid-planos'))
            .count();
    }
}