Comb sort:

Comb Sort er en forbedret version af bubble sort som i stedet for kun at sammenligne naboer, sammenligner Comb Sort elementer med en større afstand imellem sig, kaldet et “gap”.
I starten er gap stort, så elementer kan flyttes hurtigt over lange afstande og hver iteration vi kører igennem vil forminske gap indtil det til sidst ender på 1 hvor algorimen stopper og elementet er færdig sorteret.

Comb Sort bruger (O(n log n)) da det starter med et stort gap hvor elementerne bliver flyttet over store afstande.
Det betyder, at listen hurtigt bliver mere “ordnet”, fordi store fejlplaceringer bliver rettet tidligt.
For hvert iteration bliver gap mindre, og antallet af sammenligninger falder.

Pseudokode:

Expoerter funktion til test kode
Iterationer = 0
gap = længden af arrayet
shrink = 1.3 (Shrink factor)
Sorted = boolean (Start false)

While (loop is false)
interationer ++
gap/shrink (for hver iteration)
if(gap <= 1)
gap = 1  (Vi er færdige med at iterer/har sortertet arrayet)
sorted = true

else If (gap = 9 || gap = 10)
gap = 11 /regl 11

i = 0

Mens (i + gap < arrayets længde)
iterationer++

Hvis element ved i er større end element ved i + gap
byt de to elementer
sorted = false
Slut hvis
i = i + 1

Returner:
arrayet
iterationer
sorted = true




Links:
https://en.wikipedia.org/wiki/Comb_sort
https://www.geeksforgeeks.org/dsa/comb-sort/