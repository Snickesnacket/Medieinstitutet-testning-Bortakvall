
# Medieinstitutet-Testning-Bortakvall

## Betyg: G 

## Enhetstester med Vitest, Axios, jest

Ladda ner repot och: 
3. Kör `npm install`

Ladda ner repot medieinstitutet_API_bortkvall och: 
4. Starta ditt Bortakväll-API
5. Kopiera `.env.example` till `.env` och fyll i URL:en till Bortakväll-API
6. Skapa tester enligt kravspecifikationen
7. Kör testerna
    - Kör `npm test` för att köra testerna
    - Kör `npm test:verbose` för att köra testerna i verbose-läge
    - Kör `npm test:ui` för att köra testerna i UI-läge (se resultatet i en webbläsare)
    - Kör `npm coverage` för att få en test coverage rapport


## Uppgiftsbeskrivning

Bedömningskriterier
På denna uppgiften kan ni få IG/G/VG 

Ni ska skriva tester för ert Bortakväll-API där ni testar att man kan hämta produkter, skapa en produkt, hämta produkten samt skapa en order.

Skapa en API-service (likt den vi skapade för TodoAPI) som era tester anropar, och som sköter kommunikationen med API:et. Det går bra att ha två services, en ProductService och en OrderService om ni hellre vill separera dem.


Ni ska testa att man:

kan hämta alla produkter
kan skapa en ny produkt
kan hämta den skapade produkten
kan hämta alla ordrar
kan skapa en ny order
kan hämta den skapade ordern
För varje test ska ni säkerställa vad ni tycker är rimligt



# Medieinstitutet-Testning-TODO

## Betyg: G 


## Enhetstester med jest

Ladda ner repot och kör:

- `npm install`
- `npm run dev`

För att starta testerna:

- `npm run test`

För att få en code coverage report så kör:

- `npm run coverage`

## Uppgiftsbeskrivning
Bedömningskriterier
På denna uppgiften kan ni få IG/G.

Skapa nedan 7 tester för de funktioner som finns i `functions.ts`. Ni får så klart skapa fler tester om ni vill, men nedan krävs för godkänt. Detta kommer att ge er ett G.

- add todo
  - should add a todo
  - should not add a todo with empty title
  - should not add a todo with title shorter than 3 characters
- toggle todo
  - should toggle a todo
  - should not toggle a todo that does not exist
- delete todo
  - should delete a todo
  - should not delete a todo that does not exist
 
  
