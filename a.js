console.log("Monoalphabetic Cipher \n")

console.log("AL BIRR KARIM SUSANTO");
console.log("A11.2017.10642");
console.log("Kriptografi - A11.4601");
console.log("https://github.com/albirrkarim \n\n");


var text = `* #!&&)#~(!& !@()&~)$ (&~)/@(~[ ^)@{(#), !&) ~%*~ $)*\\^ >(~% * ^~@)*] !}
])^^*/)^, *^^<@)^ ~%*~ ])^^*/)^ *@) @)#)({)$ *^ ^)&~ >(~% &!
$<+\\(#*~(!&, (&^)@~(!&, ]!$(}(#*~(!&, @)!@$)@(&/, !@ @)+\\*[^. ~%)
$)^~@<#~(!& !} $*~* (^ *\\^! #!{)@)$ <&$)@ ~%(^ ^)@{(#). ~%<^, ~%)
#!&&)#~(!&-!@()&~)$ (&~)/@(~[ ^)@{(#) *$$@)^^)^ =!~% ])^^*/) ^~@)*]
]!$(}(#*~(!& *&$ $)&(*\\ !} ^)@{(#). !& ~%) !~%)@ %*&$, * #!&&)#~(!&\\)^^
(&~)/@(~[ ^)@{(#), !&) ~%*~ $)*\\^ >(~% (&$({($<*\\ ])^^*/)^ >(~%!<~
@)/*@$ ~! *&[ \\*@/)@ #!&~)y~, /)&)@*\\\\[ +@!{($)^ +@!~)#~(!& */*(&^~
])^^*/) ]!$(}(#*~(!& !&\\[. >) #*& ]*|) * $(^~(&#~(!& =)~>))& ^)@{(#)
>(~% *&$ >(~%!<~ @)#!{)@[. =)#*<^) ~%) (&~)/@(~[ ^)@{(#) @)\\*~)^ ~!
*#~({) *~~*#|^, >) *@) #!&#)@&)$ >(~% $)~)#~(!& @*~%)@ ~%*& +@){)&~(!&.
(} * {(!\\*~(!& !} (&~)/@(~[ (^ $)~)#~)$, ~%)& ~%) ^)@{(#) ]*[ ^(]+\\[
@)+!@~ ~%(^ {(!\\*~(!&, *&$ ^!]) !~%)@ +!@~(!& !} ^!}~>*@) !@ %<]*&
(&~)@{)&~(!& (^ @)x<(@)$ ~! @)#!{)@ }@!] ~%) {(!\\*~(!&. *\\~)@&*~({)\\[,
~%)@) *@) ])#%*&(^]^ *{*(\\*=\\) ~! @)#!{)@ }@!] ~%) \\!^^ !} (&~)/@(~[ !}
$*~*, *^ >) >(\\\\ @){()> ^<=^)x<)&~\\[. ~%) (&#!@+!@*~(!& !} *<~!]*~)$
@)#!{)@[ ])#%*&(^]^ (^, (& /)&)@*\\, ~%) ]!@) *~~@*#~({) *\\~)@&*~({).`;

// console.log(text);
/*
    Karena di javascript / (slash) itu adalah escape character
    maka harus di ganti dahulu
    
    /   diganti dengan ->   //    di string akan menjadi /
    //  diganti dengan ->   ////  di string akan menjadi //
*/


function bubbleSort(items) {
    /* Sorting With bubble sort */
    var length = items.length,
        i,j,tmp;

    for (i = 0; i < length; i++) {
        for (j = 0; j < (length - i - 1); j++) {
            if (items[j].freq < items[j + 1].freq) {
                tmp = items[j];
                items[j] = items[j + 1];
                items[j + 1] = tmp;
            }
        }
    }

    return items;
}

function countCharacterFreq(text) {
    /* Menghitung Frekuensi Tiap Karakter pada String */
    var arrOut = [],
        exception = [],
        len = text.length,
        sum, i, j;

    for (i = 0; i < len; i++) {
        
        ada = false;

        for (j = 0, lenExt = exception.length; j < lenExt; j++) {

            if (text[i] == exception[j]) {
                ada = true;
                j = lenExt;
            }
        }

        if (!ada) {
            sum = 0;
            for (j = 0; j < len; j++) {
                if (text[i] == text[j]) {
                    sum++;
                }
            }

            arrOut.push({
                char: text[i],
                freq: sum,
            });
            exception.push(text[i]);
        }
    }
    return bubbleSort(arrOut);
}

/* 1.  Hitung */
var arrCharacter = countCharacterFreq(text);
console.log(arrCharacter);


/* 2. Substitusi character  */
function substitusi(text, arrSubs) {
    var lenSubs = arrSubs.length,
        lenText = text.length,
        i,j,asli,subs;


    for (i = 0; i < lenSubs; i++) {
        asli = arrSubs[i].asli;
        subs = arrSubs[i].subs;

        for (j = 0; j < lenText; j++) {

            if (asli == text[j]) {
                text = text.replace(asli, subs);
            }
        }
    }
    return text;
}


var arrSubs = [
    /* Karakter substitusi yang di dapat dari frekuensi karakter  */
    {
        asli: ")", /* T */
        subs: "e",
    },
    {
        asli: "~", /* T */
        subs: "t",
    },
    {
        asli: "*",
        subs: "a", /* T */
    },

    {
        asli: "!", /* T */
        subs: "o",
    },
    {
        asli: "%",/* T */
        subs: "h",
    },

    /* Karakter substitusi di bawah ini coba coba */

    {
        asli: `}`,
        subs: "f",
    },

    {
        asli: `@`,
        subs: "r",
    },

    {
        asli: `&`,
        subs: "n",
    },

    {
        asli: `$`,
        subs: "d",
    },

    {
        asli: `^`,
        subs: "s",
    },

    {
        asli: "(",
        subs: "i",
    },

    {
        asli: `<`,
        subs: "u",
    },

    {
        asli: `#`,
        subs: "c",
    },

    {
        asli: `{`,
        subs: "v",
    },

    {
        asli: `/`,
        subs: "g",
    },

    {
        asli: `>`,
        subs: "w",
    },

    {
        asli: `]`,
        subs: "m",
    },

    {
        asli: `|`,
        subs: "k",
    },

    {
        asli: `=`,
        subs: "b",
    },

    {
        asli: `[`,
        subs: "y",
    },

    {
        asli: `\\`,
        subs: "l",
    },

    {
        asli: `\\\\`,
        subs: "ll",
    },


    {
        asli: `+`,
        subs: "p",
    },

    {
        asli: `{`,
        subs: "v",
    },

    {
        asli: `x`,
        subs: "q",
    },

    {
        asli: `\n`,
        subs: "  ",
    },

];



var out = substitusi(text, arrSubs);

/* 3. Mencari "That"  untuk membantu coba coba character*/
function findThat(text) {
    var len = text.length;
    for (var j = 0; j < len - 4; j++) {
        if (text[j] == "t") {
            if (text[j + 3] == "t") {
                console.log(text[j] + text[j + 1] + text[j + 2] + text[j + 3]);
            }
        }
    }
}

// findThat(out);


/* 4. Menghitung Frekuensi kata yang banyak muncul */
function countWordFreq(text) {
    var arrKata     = text.split(" "),
        lenArrkata  = arrKata.length,
        exception   = [],
        arrOut         = [],
        i,j,ada,sum;

    for (i = 0; i <lenArrkata; i++) {

        ada = false;
        for (j = 0, lenEx = exception.length; j < lenEx; j++) {
            if (arrKata[i] == exception[j]) {
                ada = true;
                j = lenEx;
            }
        }
        
        if (!ada) {
            sum = 0;
            for (j = 0; j < lenArrkata; j++) {
                if (arrKata[i] == arrKata[j]) {
                    sum++;
                }
            }

            arrOut.push({
                char: arrKata[i],
                freq: sum,
            });

            exception.push(arrKata[i]);
        }
    }

    return bubbleSort(arrOut);
}

var arrKataFreq = countWordFreq(out);


/* Print the words and their frequency */
for (var j = 0, lenJ = arrKataFreq.length; j < lenJ; j++) {
    console.log(arrKataFreq[j]);
}

console.log(out);