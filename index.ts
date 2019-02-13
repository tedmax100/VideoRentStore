import {statement} from "./statement";
import * as plays from './plays.json';
import * as invoices from "./invoices.json";

(() => {
    console.dir(statement(invoices[0], (plays as any) ));
})();