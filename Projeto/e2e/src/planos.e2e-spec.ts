import { browser, by, element, logging } from 'protractor';
import { Checkout } from './checkout.po';
import { Confirmacao } from './confirmacao.po';
import { Planos } from './planos.po';


describe('Planos', () => {

    let planos: Planos;
    let checkout: Checkout;
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
        planos = new Planos();
        checkout = new Checkout();
        confirmacao = new Confirmacao();

        await planos.navigateTo();
    })

    it('Título da página Planos', async () => {
        
        const title = await planos.getTitle();
        expect(title).toEqual('Planos');
    })

   
    it('Verificando se existe uma lista de Planos', async () => { 
            
            const listaPlanos = await planos.getlistaPlanos();            
            expect(listaPlanos).toBeGreaterThan(0);
    
    });


      

  
    
});