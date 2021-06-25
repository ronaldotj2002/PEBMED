import { browser, by, element } from 'protractor'

export class Planos {

    static PAGE_TITLE = 'Planos';
    
    navigateTo() {
        return browser.get(`${browser.baseUrl}/planos`);
    }

    getTitle() {
        return browser.getTitle();
    }

    getlistaPlanos () {
        return element
            .all(by.css('.grid-planos'))
            .count();
    }

    fillFormaPagamentoField(number: number) {
        return element(by.css('input[formcontrolname=formaPagamento]:checked'))
        .sendKeys(number)
    }

    comprar() {
        return element(by.css('button[type=button]'))
        .click()
    }
}