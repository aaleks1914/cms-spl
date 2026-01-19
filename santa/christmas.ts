import {Santa} from "./santa";
import {Child} from "./child";
import {God} from "./god";
import {Chancellor} from "./chancellor";

const santa = new Santa();
const child = new Child("Stefan", 6, "good");
const god = new God("Marcel Maier");
const chancellor = new Chancellor("Christian Stocker", 65, "Austria");

santa.addNotifiable(child);
santa.addNotifiable(god);
santa.addNotifiable(chancellor);

santa.notify("ATTENTION: Santa is coming!");
