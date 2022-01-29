---
theme: white
[Quiz Online](https://play.kahoot.it/v2/?quizId=8a4583b2-637d-447c-9889-457f99198e1a)
---

## D: Conosci Angular? da quanto tempo lo usi?

-   0 - 1 anno
-   1 - 2 anni
-   2 - 4 anni
-   \> 4+ Anni

---

## Sapevate che i **@Component**i

Sono i _"building blocks"_ di un'app Angular dall'

`<app-root>` fino `<my-button>`

![NGDOC_ComponentTree](https://angular.io/generated/images/guide/architecture/component-tree.png)
![NGDOC_CompA_B_C](https://angular.io/generated/images/guide/dependency-injection/car-components.png)

---

## D: Hai mai usato la DI?

-   NO
-   SI

---

## D: Perchè usiamo la DI?

![NGDOC_Injector](https://angular.io/generated/images/guide/architecture/injector-injects.png)

-   Io non la uso, lo fa Angular a mia insaputa!
-   Perchè c'è scritto nella documentazione?
-   Perchè mio Cugggino, ha detto che usare i pattern fa figo!
-   Per mantenere le istanze dei nostri Servizi

---

## D: Ma cosa ci mettiamo nei Servizi? Perchè li usiamo?

![NGDOC_Inject](https://angular.io/generated/images/guide/architecture/dependency-injection.png)

-   Fattorizzare logica comune da riutilizzare _(es: Utils / API call)_
-   Condivisione di dati e informazioni _(es: Login / State management)_
-   Comunicazione “indiretta” tra componenti per evitare catene prop down / event up
-   Estrarre logica e stato dai componenti per agevolarne lo scambio e utilizzo

---

### OK abbiamo capito che la DI può esser utile, Ora passiamo alle [Slides](slides.md) dalle Basi per capire...

![matrix](projects/app/src/assets/follow_white_rabbit.jpeg)

# "... quanto è profonda la tana del Bianconiglio!"

--
