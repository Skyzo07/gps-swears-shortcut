# The GPS Swears It Was a Shortcut

[![make.fun](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![rank](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/Skyzo07/gps-swears-shortcut/rank.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)
[![reward](https://make.fun/badge/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9/Skyzo07/gps-swears-shortcut/reward.svg)](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9)

Entry for [The GPS Swears It Was a Shortcut](https://make.fun/bounty/u-alven-the-gps-swears-it-was-a-shortcut-2cac21d9) — the GPS's one-line excuse for sending the driver down the wrong road.

## The line

> I sent you down the boat ramp because the lake looked shorter on my screen, and I stand by that.

96 characters, one line of plain text, in the GPS's own smug, defensive voice — blaming
the map (well, the screen) instead of itself.

## How it works

`main.ts` (Node 22, no network) writes the entry line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`. Before writing it enforces the gate: the entry must be
UTF-8, 1–200 characters, and not only whitespace — otherwise it fails loudly.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
