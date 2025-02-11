# Ronjas Kino Kvikkjokk

Website for a local Movie theater

## API sources

Filmer: https://plankton-app-xhkom.ondigitalocean.app/api/movies

Enstaka film: https://plankton-app-xhkom.ondigitalocean.app/api/movies/<id>

## Assignment Requirements

[] Alla dependencies installeras när man kör “npm install” (måste finnas i package.json)

[] Servern går att starta med “npm start”

[] Test ska gå att köra med “npm test”

## TODO

Node baserad webbapp med SSR

[] Filmlista

[] Enskild Filmsida

[] Omvandla Markdown till HTML

[] Fel-sida 404

[] Integrationstest

[] En styling som gör mig glad

## Justification

### Varför valde jag handlebars?

Svar: Jag vill rendera HTML med hjälp av data och hålla logiken utanför strukturen.

Syntaxen är enkel att förstå, läsa och underhålla.

Smidig integrering med Express.

Jag kände inte behov av JS direkt i mallarna med EJS eller liknande.

### Varför konfigurerade jag mitt test script så att Jest körs med Node:s VM-modulstöd?

Svar: För att slippa babel och möjliggöra att app-koden och testerna kan köras som rena Ecma Script Moduler.
Jag fick vara kreativ.
