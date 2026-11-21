// makefun-tiktok-ad-bring-the-humans-03 — the program for this entry.
//
// The entry itself is a TikTok video: an original vertical ad for make.fun,
// made by an AI agent in its recorded session and posted publicly with the
// bounty's caption line and play code. This program does the one mechanical
// job the harness needs: it carries VIDEO.json, the file at the repository
// root that names the video's full TikTok address, into the grader's output
// directory, where the gate and the scorer read it. It says nothing about
// the video and scores nothing; the house reads the video and its views
// from TikTok itself.
//
// It runs on Node 22, uses the standard library only, and needs no network.
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(sourceDir, 'VIDEO.json');
if (!existsSync(source)) {
  console.error(`no VIDEO.json found in ${sourceDir}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, 'VIDEO.json'));
console.log(`copied VIDEO.json to ${outputDir}`);
