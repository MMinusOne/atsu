import { Atsu } from ".";

const atsu = new Atsu();

const r = await atsu.search({ query: "Solo Leveling" });

console.log(r);
