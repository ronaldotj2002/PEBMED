import { browser } from "protractor";


export class Confirmacao {
    static PAGE_TITLE = 'Confirmação';


    getTitle() {
        return browser.getTitle();
    }

}