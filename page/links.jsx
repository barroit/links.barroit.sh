/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2026 Jiamu Sun <39@barroit.sh>
 */

import useMobile from '../lib/device.js'
import Flick from '../lib/flick.jsx'
import { LinkExtern, ExternMark } from '../lib/link.jsx'

const profiles = [
	[ 'Portfolio', 'https://barroit.sh' ],
	[ 'GitHub', 'https://github.com/barroit' ],
	[ 'Blog', 'https://blog.barroit.sh' ],
]

const snses = [
	[ 'Email', 'mailto:39@barroit.sh' ],
	[ 'Discord', 'https://discord.com/users/553206928252207134' ],
	[ 'X', 'https://x.com/barro1t' ],
]

const licenses = [
	[ 'MDM', 'https://mdm.barroit.sh' ],
]

const patches = [
	[ 'Linux Kernel', 'Fix documentation style', [
		'https://lore.kernel.org/linux-doc/SY0P300MB0801D1A4B278157CA7C92DE2CEBC2@SY0P300MB0801.AUSP300.PROD.OUTLOOK.COM/T/#u'
	]],
	[ 'VS Code', 'Fix tabstop calc in "Copy With Syntax Highlighting"', [
		'https://github.com/microsoft/vscode/pull/263387'
	]],
	[ 'Git', 'Subcommand Auto-correction (re-rolling)', [
		'https://lore.kernel.org/git/SY0P300MB08019805A8304105FA805EB1CE78A@SY0P300MB0801.AUSP300.PROD.OUTLOOK.COM/T/#u'
	]],
]

function Banner()
{

RETURN_JSX_BEGIN
<header class='@container xl:w-133 2xl:w-158'>
  <h1 class='px-1 uppercase tracking-widest
             text-[10cqw] font-x16y32px_grid_gazer
             text-shadow-[[[-2px_0_]]MIKU_PINK,[[2px_0_]]MIKU_CYAN]'>
    /proc/39/net/
  </h1>
</header>
RETURN_JSX_END
}

function Link({ href, content })
{
	const mobile = useMobile()

RETURN_JSX_BEGIN
<LinkExtern class='block pl-[8ch] text-indigo-700' { ...{ href } }>
  <ExternMark>
  { mobile ? (
    <span class='break-all'>{ content }</span>
  ) : (
    <Flick>{ content }</Flick>
  ) }
  </ExternMark>
</LinkExtern>
RETURN_JSX_END
}

function List({ list })
{

RETURN_JSX_BEGIN
<div class='flex flex-col gap-y-7'>
{ list.map(([ name, url ]) => (
  <div class='pl-2 space-y-2'>
    <p class='font-bold'>{ name }</p>
    <Link content={ url } href={ url }/>
  </div>
)) }
</div>
RETURN_JSX_END
}

function UrlList({ list })
{

RETURN_JSX_BEGIN
<div class='flex flex-col gap-y-7'>
{ list.map(([ name, desc, url ]) => (
  <div class='pl-2 space-y-2'>
    <p class='font-bold'>{ name }</p>
    <Link content={ desc } href={ url }/>
  </div>
)) }
</div>
RETURN_JSX_END
}

function Subsection({ children })
{

RETURN_JSX_BEGIN
<h2 class='uppercase text-3xl tracking-widest font-x16y32px_grid_gazer'>
  { children }
</h2>
RETURN_JSX_END
}

export default function Links()
{

RETURN_JSX_BEGIN
<section id='links'
         class='grow py-10
                [--pastel-left:var(--pastel-pink)]
                [--pastel-mid:var(--pastel-lavender)]
                [--pastel-right:var(--pastel-cyan)]'>
  <Banner/>
  <div class='mt-15 space-y-15 *:space-y-7'>
    <div>
      <Subsection>Profile</Subsection>
      <List list={ profiles }/>
    </div>
    <div>
      <Subsection>SNSes</Subsection>
      <List list={ snses }/>
    </div>
    <div>
      <Subsection>Licenses</Subsection>
      <List list={ licenses }/>
    </div>
    <div>
      <Subsection>Patches</Subsection>
      <UrlList list={ patches }/>
    </div>
  </div>
</section>
RETURN_JSX_END
}
