---
layout: '../../layouts/character.astro'

display: 'daniel'
sub: 'silly blehh'
desc: "daniel is my partner, pls don't take him from me... he very special to me.... (i only made the design, keep this in mind)"
embed_color: '#8b56a3'

imgsub: '-w-'
colors: [
    '#0f0035',
    '#2c0051',
    '#663366',
    '#8b56a3',
    '#ffd999',
    '#f1ffe1'
]
id: 'daniel'
---
<style>
    :root {
        --col-bg: #ffccee;
        --col-char-bg: #636;

        --col-bright: #f1ffe1;
        --col-light: #ff77ff;
        --col-main: #8b56a3;
        --col-dim: #636;
        --col-dark: #2c0051;

        --col-link: var(--col-main);
        --col-link-hover: var(--col-light);

        --header-color: var(--col-dark);
        --header-logo-color-1: var(--col-bright);
        --header-logo-color-2: var(--col-main);
    }

    html {
        color: var(--col-dark);
    }

    i {
        text-decoration: italic;
        color: var(--col-dim);
    }

    .white {
        color: var(--col-bright);
        background-color: var(--col-dark);
        padding: 3px;
        border-radius: 5px;
    }

    .black {
        color: var(--col-dark);
        background-color: var(--col-bright);
        padding: 3px;
        border-radius: 5px;
    }

    li::marker {
        color: var(--col-dim);  
    }

    table {
        color: var(--col-bright);
    }

    td {
        background-color: var(--col-main);
    }

    td.name {
        background-color: var(--col-dark);
        color: var(--col-main);
        box-shadow: unset;
        align-content: start;
    }

</style>

daniel is a very silly guy who codes and plays games. %prn_sub% is one of the best people i've ever met ngl.....

<h1 style="text-align: center;"><a href="https://skruyo.com" target="_blank">visit %prn_pos% site immediately</a></h1>
<h1 style="text-align: center;"><a href="https://skruyo.com" target="_blank">visit %prn_pos% site immediately</a></h1>
<h1 style="text-align: center;"><a href="https://skruyo.com" target="_blank">visit %prn_pos% site immediately</a></h1>
<h1 style="text-align: center;"><a href="https://skruyo.com" target="_blank">visit %prn_pos% site immediately</a></h1>

<br>
<br>
<br>
<hr>
<section id="appearance" style="text-align: left">

<div style="background-color: var(--col-main); padding: 16px; border-radius: 15px; width: fit-content;">
<a style="text-decoration: none;" href="#appearance">
<span style="font-size: 30px; color: var(--col-light)">#</span>
<span style="font-weight: bolder; font-size: 50px; margin: 0; margin-top: 30px; color: var(--col-bright)">
appearance
</span>
</a>
</div>

%prn_sub% wears a <span style="color: var(--col-main);">**purple**</span> shirt and <span class="black">**black**</span> pants and <span class="white">**white**</span> shoes. simple enough

%prn_sub% also has <span class="black">**black**</span> fluffy hair like me ...... i love %prn_obj%

</section>

<hr>
<section id="other" style="text-align: left">

<div style="background-color: var(--col-main); padding: 16px; border-radius: 15px; width: fit-content;">
<a style="text-decoration: none;" href="#other">
<span style="font-size: 30px; color: var(--col-light)">#</span>
<span style="font-weight: bolder; font-size: 50px; margin: 0; margin-top: 30px; color: var(--col-bright)">
other
</span>
</a>
</div>

<br>
<table>

<tr>
    <td class="name">nicknames</td>
    <td>

- daniel
- danielle
- dan
- skry
- skruyo

</td>
</tr>

<tr>
    <td class="name">pronouns</td>
    <td>he, she</td>
</tr>

<tr>
    <td class="name">favorites</td>
    <td>

- me
- chocolate
- coffee
- milk
- coding
- gaming

</td>
</tr>

</table>

- %prn_sub% is cute

- %prn_sub% is handsome

- %prn_sub% is beautiful

- i love %prn_obj%


![skry](/characters/daniel/skry.png)

</section>


![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)
![skry](/characters/daniel/skry.png)

<script>
    function getPrn(id) {
        var fuck = 'he,she';
        if (id == 'pos') fuck='his,her';
        if (id == 'obj') fuck='him,her';
        return fuck.split(',')[(Math.random() > 0.3) ? 0 : 1];
    }

    var allElements = document.getElementById('content').getElementsByTagName("*");
    for(var i = 0; i < allElements.length; i++) {
        var text = allElements[i].innerHTML;
        if (text.includes('%prn_')) {
            allElements[i].innerHTML = allElements[i].innerHTML
            .replace('%prn_pos%', getPrn('pos'))
            .replace('%prn_sub%', getPrn('sub'))
            .replace('%prn_obj%', getPrn('obj'));
        }
    }
</script>