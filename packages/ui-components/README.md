# Eduzz Houston

<img src="docs/assets/welcome.svg" width="100%" />

[![version](https://img.shields.io/npm/v/@eduzz/houston?color=%23E3F2FF)](https://www.npmjs.com/package/@eduzz/houston)
[![size](https://img.shields.io/bundlephobia/min/@eduzz/houston?color=%23E3F2FF)](https://www.npmjs.com/package/@eduzz/houston)
[![version](https://img.shields.io/github/last-commit/eduzz/houston?color=%23E3F2FF)](https://github.com/eduzz/houston/commits)

### Installation

```
$ yarn add @eduzz/houston
```

### Use

```
import Button from '@eduzz/houston/components/Button'; (recommended)
```

or

```
import { Button } from '@eduzz/houston';
```

### Configuration

**This Provider will not temporarily replace the current theme of the project, it will only style Houston's components according to the application. Enabling the migration of components gradually.**

In the project's root file

```
import ThemeProvider from '@eduzz/houston/components/ThemeProvider';

<ThemeProvider application='APPLICATION_NAME'>
  {...}
</ThemeProvider>
```

| application      | value        | done  |
|------------------|--------------|-------|
| Select Afiliados | `select`     | true  |
| Órbita           | `orbita`     | false |
| Jobzz            | `jobzz`      | false |
| Blinket          | `blinket`    | false |
| Safe Vídeo       | `safevideo`  | false |
| Nutror           | `nutror`     | false |
| Checkount Sun    | `sun`        | false |
| Telescope        | `telescope`  | false |
| Alumy            | `alumy`      | false |
| Backoffice       | `backoffice` | false |
| Custom Pallete   | `custom`     | false |