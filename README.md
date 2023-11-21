
# Medieinstitutet-Testning-Bortakvall

## Betyg: G 

## Enhetstester med Vitest, Axios, jest

Ladda ner repot och: 
1. Kör `npm install`

Ladda ner repot medieinstitutet_API_bortkvall och: 
2. Kör `npm install`
3. Kopiera `.env.example` till `.env` 
4. Ladda ner och installera mamp och ställ in till MySQL
5. Kör `npm install -g env-cmd`
6. Kör `npx prisma migrate dev` 
7. Kör `npm run build` 
8. Kör `npm run start` 


9. Skapa tester enligt kravspecifikationen
10. Kör testerna
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

