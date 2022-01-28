---
theme: white
---

# XE Angular DI

## Sei veramente sicuro di conoscerla!?

**Daniele Morosinotto**
[@dmorosinotto](https://twitter.com/dmorosinotto)

XE.NET Online Session 28/01/2022 -
Repo: [https://github.com/dmorosinotto/XE_Angular_DI](https://github.com/dmorosinotto/XE_Angular_DI)

--

# AGENDA

-   Intro - Quiz: Cos'è la DI? E perche la usiamo!?
-   Le Basi: definizioni di Providers, Injector, Token...
-   Come funziona: il "Mental model", Regole di risoluzione, local Scopes, conflitti...
-   Demo: Esempi / casi reali + un approccio "nuovo"
-   Q & A

--

# Intro

## Partiamo con un [Quiz](https://play.kahoot.it/v2/?quizId=8a4583b2-637d-447c-9889-457f99198e1a)

---

# Le Basi

DI - **Dependency Injection** - [glossary](https://angular.io/guide/glossary#dependency-injection-di):
<small>
A design pattern and mechanism for creating and delivering some parts of an application <b>dependencies</b> to other parts of an application that require them.
</small>

In Angular, **dependencies** are typically [**services**](https://angular.io/guide/glossary#service) _(service class, but they can also be values or functions)_

An [**injector**](https://angular.io/guide/glossary#injector) for an application _(created automatically during bootstrap)_ **instantiates dependencies** when needed, **using** a configured [**provider**](https://angular.io/guide/glossary#provider) **rule** for a [**token**](https://angular.io/guide/glossary#token)
![NGDOC_Injector](https://angular.io/generated/images/guide/architecture/injector-injects.png)

--

## Injector

-   Elenco delle **regole** _(Provider)_ per creare _Servizi_
-   **Istanze** dei _Servizi_ che sono creati a fronte della prima richiesta, e poi restituita/condivisa a chi la richiede via _(Token)_
-   Puntatore ad un Injector **padre**, verso cui fare fallback in mancanza di una regola per il Token

<img src="https://angular.io/generated/images/guide/dependency-injection/injectors.svg" width="50%">

--

## Provider

Provider = Regola per la **creazione istanza** del Servizio

-   [Semplificata](https://angular.io/api/core/TypeProvider): `[ServiceClass]`
-   [Esplicita](https://angular.io/api/core/ClassProvider): `{provide: ServiceClass, useClass: ServiceClass}`
-   [Alias](https://angular.io/api/core/ExistingProvider): `{provide: ServiceClass, useExisting: Token}`
-   [Valore](https://angular.io/api/core/ValueProvider): `{provide: Token, useValue: XXX}`
-   [Funzione](https://angular.io/api/core/FactoryProvider): `{provide: Token, useFactory: (par)=>new XYZ(p), deps:[TokenPar]}`

--

## Token

Token = **Chiave identificativa** della _regole (e istanza)_ all'interno della registry di Providers dell'Injector

-   Stringa
-   Classe (usata come Tipo)
-   [InjectionToken\<T\>](https://angular.io/api/core/InjectionToken)

```
type T = number;
const options = { providedIn: "root", factory: ()=>42};
const Token = new InjectionToken<T>("ANSWER", options);

@Component({selector: "cmp-usa-token"}) class MyComponent {
    constructor (srv: Service, @Inject(Token) answer: T) {...}
}
```

---

# Come Funziona

## Dove mettiamo i Providers?

-   Direttamente sulle classi dei Serivizi _([tree-shakable](https://angular.io/api/core/Injectable#providedin))_ `@Injectable({providedIn: "root" | "any" | Type<Module>}) class Service`
-   Negli array **providers** legati al
    -   scope [modulo](https://angular.io/guide/ngmodule-faq#why-is-a-service-provided-in-a-feature-module-visible-everywhere) `@NgModule.providers=[..]`
    -   scope [locale](https://angular.io/guide/dependency-injection-in-action#multiple-service-instances-sandboxing) `@Directive.providers / @Component({viewProviders:[...]})`

--

## Mental model

In Angular application we have a **Hierarchical DI**: start with Null <- [Platform](https://angular.io/guide/hierarchical-dependency-injection#platform-injector) <- [root](https://angular.io/guide/ngmodule-faq#should-i-add-application-wide-providers-to-the-root-appmodule-or-the-root-appcomponent) injector with [all merged](https://angular.io/guide/ngmodule-faq#why-is-a-service-provided-in-a-feature-module-visible-everywhere) _providers_, _**every** component_ has its [own injector](https://angular.io/guide/hierarchical-dependency-injection#directive-and-component) and [lazy loaded](https://angular.io/guide/lazy-loading-ngmodules#lazy-loading-basics) module introduces separete [child injector](https://angular.io/guide/ngmodule-faq#why-is-a-service-provided-in-a-lazy-loaded-module-visible-only-to-that-module)

![NGDOC_ModuleInjector](https://angular.io/generated/images/guide/providers/any-provider.svg)

--

## Regole di risoluzione

-   [Flattening](https://angular.io/guide/hierarchical-dependency-injection#tree-shaking-and-injectable) di tutti gli **Eager** [`@NgModule.providers`](https://angular.io/api/core/NgModule#providers) a livello di _root injector_ (a partire da `AppModule` segue tutti [`@NgModule.imports`](https://angular.io/api/core/NgModule#imports) ricorsivamente)
-   Nel caso di registrazione multipla _(stesso Token sullo stesso Injector)_ l'[ultimo vince](https://angular.io/guide/ngmodule-faq#what-if-two-modules-provide-the-same-service) (Ammeno di usare [`multi:true`](https://angular.io/api/core/FactoryProvider#multi-value-example) nel provider + [Trick](https://stackoverflow.com/questions/49406615/is-there-a-way-how-to-use-angular-multi-providers-from-all-multiple-levels) per component)
-   `AppModule.providers` ha [precedenza](https://angular.io/guide/hierarchical-dependency-injection#injectable-vs-ngmodule) su `@Injectable({providedIn:"root"})`

--

## DI nei Componenti

Ogni componente ha un suo [ElementInjector](https://angular.io/guide/hierarchical-dependency-injection#elementinjector) che si può ricavare `constructor(inj: Injector)`

-   Fa il [Merge](https://angular.io/guide/hierarchical-dependency-injection#resolution-rules) _(ricerca gerarchica su)_ due Injector:
-   [NodeInjector](https://angular.io/guide/hierarchical-dependency-injection#elementinjector) in cui è registrato:
    -   Istanza del **Component stesso** + [NodeInj padre](https://stackoverflow.com/questions/46332859/angular-2-how-does-ng-bootstrap-provide-the-ngbradiogroup-and-ngbbuttonlabel-t/46376298#46376298)
    -   Servizi: [`ElementRef`](https://angular.io/guide/dependency-injection-in-action#inject-the-components-dom-element), [`ChangeDetectorRef`](https://angular.io/api/core/ChangeDetectorRef#changedetectorref)...
    -   Servizi dichiarati nel `@Component.providers`
    -   Eventuali servizi su `@Directive.providers` [agganciate](https://angular.io/guide/hierarchical-dependency-injection#directive-and-component) **allo stesso nodo** (@Dir ha precedenza)
-   [ModuleInjector](https://angular.io/guide/hierarchical-dependency-injection#moduleinjector) che ha caricato il Component _(View)_
-   Possibilità di influenzare ricerca [`@Optional @Host @SkipSelf`](https://angular.io/guide/dependency-injection-in-action#make-a-dependency-optional-and-limit-search-with-host)

---

# DEMOS

--

## TIPS & REFERENCE

Semplificatevi la vita:

-   usate **`{providedIn: "root"}`** solo per i **singleton** che ha senso _tenere vivi per_ l' **intera applicazione**! _(es: AppConfig / Login / Notification)_
-   usate i **`ContainerProvider`** per tutto il resto! Così il contesto dei Servizi === l'albero componenti, sarà più semplice **isolarli/riutilizzarli** e più facile capire lo **scope** dei Servizi + potrete **deallocarli**!

Se volete veramente _"vedere quanto è profonda la tana del Bianconiglio"_ leggete questo [articolo](https://indepth.dev/posts/1261/what-you-always-wanted-to-know-about-angular-dependency-injection-tree)

--

## FEEDBACK & CONTACT

![Me](https://www.xedotnet.org/media/1032/morosinotto_foto.jpg?height=300)

#### Daniele Morosinotto

**Javascript enthusiast**

-   Twitter [@dmorosinotto](https://twitter.com/dmorosinotto)
-   Email [d.morosinotto@icloud.com](d.morosinotto@icloud.com)
-   Repo [https://github.com/dmorosinotto/XE_Angular_DI](https://github.com/dmorosinotto/XE_Angular_DI)
