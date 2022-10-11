# next-time-ago

A lightweight tiny time-ago component for your next React apps.

[![NPM](https://img.shields.io/npm/v/next-time-ago.svg)](https://www.npmjs.com/package/next-time-ago) ![npm bundle size](https://img.shields.io/bundlephobia/min/next-time-ago) [![Build Status](https://api.travis-ci.com/Bunlong/next-time-ago.svg?branch=master)](https://travis-ci.com/Bunlong/next-time-ago) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## 🎁 Features

* No dependencies
* Compatible with both JavaScript and TypeScript
* Support for various languages

## 🔧 Install

next-time-ago is available on npm. It can be installed with the following command:

```
npm install next-time-ago --save
```

next-time-ago is available on yarn as well. It can be installed with the following command:

```
yarn add next-time-ago --save
```

## 💡 Usage

```ts
import { useTimeAgo } from 'next-time-ago';

const Home = () => {
  const { TimeAgo } = useTimeAgo();

  return (
    <>
      <TimeAgo date='September 1, 2022' locale='kh' />

      <TimeAgo date='September 1, 2022' locale='DE' />

      <TimeAgo date='September 1, 2022 9:00 pm' />

      <TimeAgo date='September 1, 2022 20:00' />
    </>
  );
}

export default Home;
```

## Props

<table>
  <thead>
    <tr>
      <th>Prop</th>
      <th>Type</th>
      <th>Default</th>
      <th>Require</th>
      <th>Description</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>date</td>
      <td>string | number | Date</td>
      <td></td>
      <td>✔️</td>
      <td>A date in the past.</td>
    </tr>
    <tr>
      <td>locale</td>
      <td>string</td>
      <td><code>en</code></td>
      <td>❌</td>
      <td>Support for various languages.</td>
    </tr>
    <tr>
      <td>live</td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>❌</td>
      <td>Live by default and will auto update it's value.</td>
    </tr>
    <tr>
      <td>element</td>
      <td>string | React.ElementType<any></td>
      <td><code>time</code></td>
      <td>❌</td>
      <td>HTML tag that is used to wrap the live updating string.</td>
    </tr>
  </tbody>
</table>

### List of Locale Codes

<table>
  <thead>
    <tr>
      <th>Language Name</th>
      <th>Code</th>
    </tr>
  <thead>
  <tbody>
    <tr>
      <td>Afrikaans</td>
      <td><code>af</code></td>
    </tr>
    <tr>
      <td>Arabic</td>
      <td><code>ar</code></td>
    </tr>
    <tr>
      <td>Azerbaijani</td>
      <td><code>az</code></td>
    </tr>
    <tr>
      <td>Azerbaijani shortened</td>
      <td><code>az-short</code></td>
    </tr>
    <tr>
      <td>Belarusian</td>
      <td><code>be</code></td>
    </tr>
    <tr>
      <td>Bulgarian</td>
      <td><code>bg</code></td>
    </tr>
    <tr>
      <td>Bosnian</td>
      <td><code>bs</code></td>
    </tr>
    <tr>
      <td>Catalan</td>
      <td><code>ca</code></td>
    </tr>
    <tr>
      <td>Czech</td>
      <td><code>cs</code></td>
    </tr>
    <tr>
      <td>Welsh</td>
      <td><code>cy</code></td>
    </tr>
    <tr>
      <td>Danish</td>
      <td><code>da</code></td>
    </tr>
    <tr>
      <td>German</td>
      <td><code>de</code></td>
    </tr>
    <tr>
      <td>German shortened</td>
      <td><code>de-short</code></td>
    </tr>
    <tr>
      <td>Divehi, Dhivehi, Maldivian</td>
      <td><code>dv</code></td>
    </tr>
    <tr>
      <td>Greek</td>
      <td><code>el</code></td>
    </tr>
    <tr>
      <td>English</td>
      <td><code>en</code></td>
    </tr>
    <tr>
      <td>English shortened</td>
      <td><code>en-short</code></td>
    </tr>
    <tr>
      <td>Spanish</td>
      <td><code>es</code></td>
    </tr>
    <tr>
      <td>Spanish shortened</td>
      <td><code>es-short</code></td>
    </tr>
    <tr>
      <td>Estonian</td>
      <td><code>et</code></td>
    </tr>
    <tr>
      <td>Basque</td>
      <td><code>eu</code></td>
    </tr>
    <tr>
      <td>Persian</td>
      <td><code>fa</code></td>
    </tr>
    <tr>
      <td>Persian shortened</td>
      <td><code>fa-short</code></td>
    </tr>
    <tr>
      <td>Finnish</td>
      <td><code>fi</code></td>
    </tr>
    <tr>
      <td>French</td>
      <td><code>fr</code></td>
    </tr>
    <tr>
      <td>French shortened</td>
      <td><code>fr-short</code></td>
    </tr>
    <tr>
      <td>Galician</td>
      <td><code>gl</code></td>
    </tr>
    <tr>
      <td>Hebrew</td>
      <td><code>he</code></td>
    </tr>
    <tr>
      <td>Hindi</td>
      <td><code>hi</code></td>
    </tr>
    <tr>
      <td>Croatian</td>
      <td><code>hr</code></td>
    </tr>
    <tr>
      <td>Hungarian</td>
      <td><code>hu</code></td>
    </tr>
    <tr>
      <td>Armenian</td>
      <td><code>hy</code></td>
    </tr>
    <tr>
      <td>Indonesian</td>
      <td><code>id</code></td>
    </tr>
    <tr>
      <td>Icelandic</td>
      <td><code>is</code></td>
    </tr>
    <tr>
      <td>Italian</td>
      <td><code>it</code></td>
    </tr>
    <tr>
      <td>Italian shortened</td>
      <td><code>it-short</code></td>
    </tr>
    <tr>
      <td>Japanese</td>
      <td><code>ja</code></td>
    </tr>
    <tr>
      <td>Javanesse</td>
      <td><code>jv</code></td>
    </tr>
    <tr>
      <td>Georgian</td>
      <td><code>jv</code></td>
    </tr>
    <tr>
      <td>Georgian shortened</td>
      <td><code>ka-short</code></td>
    </tr>
    <tr>
      <td>Khmer</td>
      <td><code>kh</code></td>
    </tr>
    <tr>
      <td>Korean</td>
      <td><code>ko</code></td>
    </tr>
    <tr>
      <td>Russian</td>
      <td><code>ky</code></td>
    </tr>
    <tr>
      <td>Lithuanian</td>
      <td><code>lt</code></td>
    </tr>
    <tr>
      <td>Latvian</td>
      <td><code>lv</code></td>
    </tr>
    <tr>
      <td>Macedonian</td>
      <td><code>mk</code></td>
    </tr>
    <tr>
      <td>Dutch</td>
      <td><code>nl</code></td>
    </tr>
    <tr>
      <td>Norwegian</td>
      <td><code>no</code></td>
    </tr>
    <tr>
      <td>Catalan</td>
      <td><code>oc</code></td>
    </tr>
    <tr>
      <td>Polish</td>
      <td><code>pl</code></td>
    </tr>
    <tr>
      <td>Portuguese</td>
      <td><code>pt</code></td>
    </tr>
    <tr>
      <td>Brazilian Portuguese</td>
      <td><code>pt-br</code></td>
    </tr>
    <tr>
      <td>Portuguese Brasil shortened</td>
      <td><code>pt-br-short</code></td>
    </tr>
    <tr>
      <td>Portuguese shortened</td>
      <td><code>pt-short</code></td>
    </tr>
    <tr>
      <td>Romanian</td>
      <td><code>ro</code></td>
    </tr>
    <tr>
      <td>Serbian</td>
      <td><code>rs</code></td>
    </tr>
    <tr>
      <td>Russian</td>
      <td><code>ru</code></td>
    </tr>
    <tr>
      <td>Kinyarwanda</td>
      <td><code>rw</code></td>
    </tr>
    <tr>
      <td>Sinhalese</td>
      <td><code>si</code></td>
    </tr>
    <tr>
      <td>Slovak</td>
      <td><code>sk</code></td>
    </tr>
    <tr>
      <td>Slovenian with support for dual</td>
      <td><code>sl</code></td>
    </tr>
    <tr>
      <td>Somali</td>
      <td><code>so</code></td>
    </tr>
    <tr>
      <td>Serbian</td>
      <td><code>sr</code></td>
    </tr>
    <tr>
      <td>Swedish</td>
      <td><code>sv</code></td>
    </tr>
    <tr>
      <td>Tamil</td>
      <td><code>ta</code></td>
    </tr>
    <tr>
      <td>Thai</td>
      <td><code>th</code></td>
    </tr>
    <tr>
      <td>Turkish</td>
      <td><code>tr</code></td>
    </tr>
    <tr>
      <td>Turkish shortened</td>
      <td><code>tr-short</code></td>
    </tr>
    <tr>
      <td>Ukrainian</td>
      <td><code>uk</code></td>
    </tr>
    <tr>
      <td>Uzbek</td>
      <td><code>uz</code></td>
    </tr>
    <tr>
      <td>Vietnamese</td>
      <td><code>vi</code></td>
    </tr>
    <tr>
      <td>Simplified Chinese</td>
      <td><code>zh-CN</code></td>
    </tr>
    <tr>
      <td>Traditional Chinese, zh-tw</td>
      <td><code>zh-TW</code></td>
    </tr>
  </tbody>
</table>

## 📜 Changelog

Latest version 0.1.0 (2022-09-04):

  * Support for various languages

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/next-time-ago/blob/master/CHANGELOG.md).

## ❗ Issues

If you think any of the `next-time-ago` can be improved, please do open a PR with any updates and submit any issues. Also, I will continue to improve this, so you might want to watch/star this repository to revisit.

## 💪 Contribution

We'd love to have your helping hand on contributions to `next-time-ago` by forking and sending a pull request!

Your contributions are heartily ♡ welcome, recognized and appreciated. (✿◠‿◠)

How to contribute:

- Open pull request with improvements
- Discuss ideas in issues
- Spread the word
- Reach out with any feedback

## 🏆 Contributors

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Bunlong">
        <img src="https://avatars0.githubusercontent.com/u/1308397?s=400&u=945dc6b97571e2b98b659d34b1c81ae2514046bf&v=4" width="100" alt="Bunlong" />
        <br />
        <sub>
          <b>Bunlong</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## ⚖️ License

The MIT License [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
