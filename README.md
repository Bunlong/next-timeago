# next-time-ago

A lightweight tiny time-ago component for your next React apps.

## 💡 Usage

```ts
import { useTimeAgo } from 'next-time-ago';

const Home = () => {
  const { TimeAgo } = useTimeAgo();

  return (
    <>
      <TimeAgo date='June 17, 2022' />
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
      <td>live</td>
      <td>boolean</td>
      <td><code>true</code></td>
      <td>❌</td>
      <td>Live by default and will auto update it's value.</td>
    </tr>
    <tr>
      <td>element</td>
      <td>string | React.ElementType<any></td>
      <td><code>`time`<any></code></td>
      <td>❌</td>
      <td>HTML tag that is used to wrap the live updating string</td>
    </tr>
  </tbody>
</table>


## 📜 Changelog

Latest version 0.0.0 (2022-06-12):

  * Add ...

Details changes for each release are documented in the [CHANGELOG.md](https://github.com/Bunlong/react-papaparse/blob/master/CHANGELOG.md).

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
