---
layout: '../../layouts/character.astro'

display: 'stoopy'
sub: 'what the hell is that'
desc: 'stoopy only exists when someone is looking at it. they were originally created for <a href="/projects/mod-name-here">mod name here</a> april fools 2023.'
embed_color: '#f8ff8f'

imgsub: '????????'
colors: [
    '#669966',
    '#66cc33',
    '#f8ff8f',
    '#fafffe',
]
id: 'stoopy'
---
<style>
    :root {
        --header-color: #035;
        --header-logo-color-1: #f8ff8f;
        --header-logo-color-2: #6c3;

        --col-bright: #fafffe;
        --col-light: #ffc;
        --col-main: #f8ff8f;
        --col-dim: #6c3;
        --col-dark: #696;

        --col-bg: #035;
        --col-char-bg: #cf6;

        --col-link: #f8ff8f;
        --col-link-hover: #6c3
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
        color: var(--col-dark);
    }

    td.name {
        background-color: var(--col-dark);
        color: var(--col-main);
        box-shadow: unset;
        align-content: start;
    }

</style>

<table>

<tr>
    <td class="name">pronouns</td>
    <td>they, it</td>
</tr>

<tr>
    <td class="name">sexuality</td>
    <td>aroace</td>
</tr>

<tr>
    <td class="name">identity</td>
    <td>agender?</td>
</tr>

</table>

<script>
    setTimeout(() => {
        window.location.href = '/404';
    }, 7172.1);
</script>