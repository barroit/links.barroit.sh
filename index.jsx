/* SPDX-License-Identifier: GPL-3.0-or-later */
/*
 * Copyright 2026 Jiamu Sun <barroit@linux.com>
 */

import { render } from 'preact'

import Links from './page/links.jsx'
import Credit from './page/credit.jsx'

function Root()
{

RETURN_JSX_BEGIN
<main class='min-h-screen flex flex-col
             xl:drop-shadow-xl font-jetbrans_mono text-neutral-900
             *:not-first:pb-25 *:first:pb-15 *:not-first:pt-5
             *:px-5 md:*:px-10 xl:*:mx-auto xl:*:w-5xl 2xl:*:w-7xl
             *:bg-pastel *:odd:[--direction:to_bottom_right]
             *:even:[--direction:to_bottom_left]'>
  <Links/>
  <Credit/>
</main>
RETURN_JSX_END
}

render(<Root/>, document.body)
