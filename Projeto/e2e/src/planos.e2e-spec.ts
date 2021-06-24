import { browser, logging } from 'protractor';
import { Planos } from './planos.po';


describe('Planos', () => {

    let planos: Planos;

    afterEach(async () => {
        const logs = await browser
            .manage().logs().get(logging.Type.BROWSER);
            expect(logs).not.toContain(jasmine.objectContaining(
                {                
                    level: logging.level.SEVERE 
                } as logging.Entry))
    })

    beforeEach( async () => {
        planos = new Planos();
        await planos.navigateTo();
    })
   
    it('Verificando se existe uma lista de Planos', async () => { 
            
            const listaPlanos = await planos.getlistaPlanos();            
            expect(listaPlanos).toBeGreaterThan(0);
    
    });
    

  
    
});