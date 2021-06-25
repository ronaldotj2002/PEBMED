import { browser, logging } from "protractor";
import { Checkout } from "./checkout.po";
import { Confirmacao } from "./confirmacao.po";


describe('Página Checkout', () => {

    let checkout:    Checkout;
    let confirmacao: Confirmacao;

    afterEach(async () => {
        const logs = await browser
            .manage().logs().get(logging.Type.BROWSER);
            expect(logs).not.toContain(jasmine.objectContaining(
                {                
                    level: logging.Level.SEVERE 
                } as logging.Entry))
    })


    beforeEach( async () => {
        
        checkout    = new Checkout();
        confirmacao = new Confirmacao();

        await checkout.navigateTo();
    })

    it('Título da página Checkout', async () => {
        
        const title = await checkout.getTitle();
        expect(title).toEqual('Checkout');
    })

    it('Cadastro de dados de pagamento e redirecionando para a página de confirmação', async () => {
      
        await checkout.fillNumCartaoField('0536952541525874');
        await checkout.fillValidadeCartaoField('0825');
        await checkout.fillCvvCartaoField('225');
        await checkout.fillNomeImpressoCartaoField('Fulano Cicrano');
        await checkout.fillCpfField('02523254125');
        await checkout.fillCupomField('DESC21');
        await checkout.formaPagamento();
        await checkout.finalizarCompra();
        const title = await confirmacao.getTitle();

        expect(title).toEqual(Confirmacao.PAGE_TITLE);
    })
    
})