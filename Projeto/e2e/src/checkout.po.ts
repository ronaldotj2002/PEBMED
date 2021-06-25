import { browser, by, element } from 'protractor'

export class Checkout {

    static PAGE_TITLE = 'Checkout';

    navigateTo() {

        return browser.get(`${browser.baseUrl}/checkout?formaPagamento=1`);
    }

    getTitle() {
        return browser.getTitle();
    }

    fillNumCartaoField(text:string) {
        return element(by.css('input[formcontrolname=numCartao]'))
        .sendKeys(text)
    }

    fillValidadeCartaoField(text:string) {
        return element(by.css('input[formcontrolname=validade]'))
        .sendKeys(text)
    }

    fillCvvCartaoField(text:string) {
        return element(by.css('input[formcontrolname=cvv]'))
        .sendKeys(text)
    }

    fillNomeImpressoCartaoField(text:string) {
        return element(by.css('input[formcontrolname=nomeImpressoCartao]'))
        .sendKeys(text)
    }

    fillCpfField(text:string) {
        return element(by.css('input[formcontrolname=cpf]'))
        .sendKeys(text)
    }

    fillCupomField(text:string) {
        return element(by.css('input[formcontrolname=cupom]'))
        .sendKeys(text)
    }


    formaPagamento() {
        return element.all(by.options('plano for plano in planos'))
        .isSelected();
    }

    finalizarCompra() {
        return element(by.css('button[type=button]'))
        .click()
    }
}