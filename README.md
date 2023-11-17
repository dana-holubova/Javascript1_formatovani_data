# Javascript1_formatovani_data

*Převeďte datum do lidské podoby.*

Bez použití knihovny `Day.js` napište funkci `formatDate`, která na vstupu obdrží objekt představující datum v následujícím formátu:

```
{ day: 12, month: 3, year: 2015 }
```

Funkce vrátí řetězec představující datum ve formátu **DD.MM.YYYY**. Příklad použití:

```
document.body.innerHTML += formatDate({ day: 6, month: 4, year: 2021 }); // 06.04.2021
```

V tomto cvičení se vám jistě bude hodit metoda na textových řetězcích `padStart`.
