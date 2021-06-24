import { browser, element, by, protractor } from 'protractor';

describe('Planos', () => {
   
    it('Teste carregando a tela de Planos e Verificando o title', async () => { 
    await browser.get(`${browser.baseUrl}/planos`);
    const title = await browser.getTitle();
    expect(title).toEqual('Projeto');

    });

    it('Verificando se existe uma lista de Planos', async () => { 
        await browser.get(`${browser.baseUrl}/planos`);
        const list = element.all(by.css('.grid-planos'));
        const listaPlanoSize = await list.count();
        expect(listaPlanoSize).toBeGreaterThan(0);
    
    });

    it('Rota Form', async () => {
        await browser.get(`${browser.baseUrl}/planos`);
        const primeiroElemento = element.all(by.css('input[type=radio]')).first();
        await primeiroElemento.sendKeys(protractor.Key.ENTER);
        const rotaForm = browser.params('/checkout?formaPagamento=12');
        expect(rotaForm).toEqual('/checkout?formaPagamento=12');


    })

    
});