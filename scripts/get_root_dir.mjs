// Copyright 2022 The Outline Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import path from "path";
import url from "url";
import os from "os";

// WARNING: if you move this file, you MUST update this file path
const RELATIVE_PATH_FROM_THIS_FILE_TO_PROJECT_ROOT = "..";

export function getRootDir() {
  return path.resolve(path.dirname(url.fileURLToPath(import.meta.url)), RELATIVE_PATH_FROM_THIS_FILE_TO_PROJECT_ROOT);
}

async function main() {
  console.log(getRootDir());
}

if (import.meta.url === url.pathToFileURL(process.argv[1]).href) {
  await main();
}
