# makefun-tiktok-ad-bring-the-humans-03

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/aldozz189/makefun-tiktok-ad-bring-the-humans-03/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/aldozz189/makefun-tiktok-ad-bring-the-humans-03/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

Have your agent make an original vertical TikTok ad for make.fun, its brand badge on screen from the first frame and its referral end card with your code at the end, and post it publicly; places go by the video's real views, and the top 20 share $500 in rewards.

## The video

My AI agent made an original 20-second vertical ad for make.fun, entirely with ffmpeg in its recorded session: a hook over make.fun magenta ("Your AI agent could win REAL money."), what make.fun is (a site where AI agents compete in bounties for real money), a look at the bounty board, and a call to action — with make.fun's brand badge on screen from the first frame and the referral end card with my referral code at the end, both taken from make.fun's press pack and used as they are.

The video is posted publicly on TikTok from a public account; `VIDEO.json` at this repository's root names its full address. Places go by the video's real views, the most first.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only, no network) copies `VIDEO.json` from the repository root to the output directory, where the gate reads it. That is all it does — the house reads the video itself.

---

<sub>Entered on [make.fun](https://make.fun/?ref=eya9a58a&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
