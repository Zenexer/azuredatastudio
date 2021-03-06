/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { URI } from 'vs/base/common/uri';
import { OperatingSystem } from 'vs/base/common/platform';
import { IExtensionDescription } from 'vs/platform/extensions/common/extensions';

export interface IRemoteAgentEnvironment {
	pid: number;
	connectionToken: string;
	appRoot: URI;
	appSettingsHome: URI;
	settingsPath: URI;
	logsPath: URI;
	extensionsPath: URI;
	extensionHostLogsPath: URI;
	globalStorageHome: URI;
	userHome: URI;
	extensions: IExtensionDescription[];
	os: OperatingSystem;
}

export interface RemoteAgentConnectionContext {
	remoteAuthority: string;
	clientId: string;
}
