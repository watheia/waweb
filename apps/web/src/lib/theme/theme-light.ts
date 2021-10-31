/*
 * Copyright 2021 Watheia Labs, LLC. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import darkest from "apps/web/src/styles/vars/wa-darkest.module.css"
import global from "apps/web/src/styles/vars/wa-global.module.css"
import large from "apps/web/src/styles/vars/wa-large.module.css"
import lightest from "apps/web/src/styles/vars/wa-lightest.module.css"
import medium from "apps/web/src/styles/vars/wa-medium.module.css"
import { Theme } from "./types"

export const theme: Theme = {
  global,
  light: lightest,
  dark: darkest,
  medium,
  large
}
