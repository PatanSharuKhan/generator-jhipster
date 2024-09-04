/**
 * Copyright 2013-2024 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { WriteFileSection } from '../../../base/api.js';
import { GRADLE_BUILD_SRC_MAIN_DIR, SERVER_TEST_SRC_DIR } from '../../../generator-constants.js';
import { moveToJavaPackageTestDir } from '../../../java/support/index.js';

export const pulsarFiles: WriteFileSection<any, any> = {
  config: [
    {
      condition: data => data.buildToolGradle,
      path: GRADLE_BUILD_SRC_MAIN_DIR,
      templates: ['jhipster.pulsar-conventions.gradle'],
    },
  ],
  test: [
    {
      path: `${SERVER_TEST_SRC_DIR}_package_/`,
      renameTo: moveToJavaPackageTestDir,
      templates: [
        'broker/PulsarIT.java',
        'config/BrokerConfiguration.java',
        'config/EmbeddedPulsar.java',
        'config/PulsarTestContainer.java',
        'config/PulsarTestContainersSpringContextCustomizerFactory.java',
      ],
    },
  ],
};
