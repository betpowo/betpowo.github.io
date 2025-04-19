---
layout: '../../layouts/character.astro'

display: 'betpo'
sub: 'absolute memelord'
desc: 'betpo is a... somewhat small stick figure friend you can have around that is not serious at all (well, only when needed).'
embed_color: '#ff6633'

imgsub: 'he can also be thrown around. kinda cool if you ask me'
colors: [
    '#2b0021',
    '#68152e',
    '#ff6633',
    '#fffaf4',
]
icon_colors: [
    '#ff6633',
    '#2b0021',
    '#fffaf4'
]
id: 'betpo'
---
<style>
    :root {
        --header-color: #301;
        --header-logo-color-1: #fffaf4;
        --header-logo-color-2: #f63;

        --col-bright: #fffaf4;
        --col-light: #fc6;
        --col-main: #f63;
        --col-dim: #c03;
        --col-dark: #301;

        --col-bg: #fffaf4;
        --col-char-bg: #f96;

        --col-link: #f63;
        --col-link-hover: #fc6
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

<section id="appearance" style="text-align: left">

<div style="background-color: var(--col-main); padding: 16px; border-radius: 15px; width: fit-content;">
<a style="text-decoration: none;" href="#appearance">
<span style="font-size: 30px; color: var(--col-light)">#</span>
<span style="font-weight: bolder; font-size: 50px; margin: 0; margin-top: 30px; color: var(--col-bright)">
appearance
</span>
</a>
</div>

he... he's just a stick figure. he also has black shiny hair i guess.<br>
not really notably black since my art style doesn't use pure **#000000.**

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

- bep
- bet
- betopia liam olivia noah emma oliver charlotte elijah amelia james ava william sophia benjamin isabella lucas mia henry evelyn theodore harper zippyfourmeal jr the 60th

</td>
</tr>

<tr>
    <td class="name">pronouns</td>
    <td>he</td>
</tr>

<tr>
    <td class="name">sexuality</td>
    <td>asexual !!!!!!!!!!!! <i>(don't make him do weird shit please i BEG)</i></td>
</tr>

<tr>
    <td class="name">identity</td>
    <td>i have no idea. but prefers to be referred as a male tho</td>
</tr>

<tr>
    <td class="name">favorites</td>
    <td>

- old, dead memes. like straight up fossils
- funny sounds
- loud fart reverb sound effect

</td>
</tr>

</table>

- he does not have gender/sex, he is just a drawing but refers to himself with he/him pronouns

- he is somewhat elastic, so he can sorta change height or the length of his limbs

- he does not

- as said before, he's not serious/mature most of the time, only when it's necessary

- he can quite literally say any meme sound whenever he wants, he's like a soundboard of some sorts. it makes sense because he comes from somewhere very funny but also really weird, which will be shown later. **not now though, since the "story" isn't final.**


</section>

<div style="text-align: center;">
    <img src="/characters/betpo/ip.png" />
    <div style="position: absolute; translate: 420px -222px; font-size: 32px; font-weight: 900;">
        <span id="ip-address">---.---.---.---</span>
    </div>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Fetch the IP address from the API
            fetch("https://ipinfo.io/json") 
                .then(response => response.json())
                .then(data => {
                    // Display the IP address on the screen
                    document.getElementById("ip-address").textContent = 
                          `${data.ip}`;
                })
                .catch(error => {
                    console.error("Error fetching IP address:", error);
                    document.getElementById("ip-address").textContent = 
                          "Unable to retrieve IP address.";
                });
        });
    </script>
</div>