/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IAction } from 'vs/base/common/actions';

export interface IErrorOptions {
	actions?: ReadonlyArray<IAction>;
}

export interface IErrorWithActions {
	actions?: ReadonlyArray<IAction>;
}

export function isErrorWithActions(obj: unknown): obj is IErrorWithActions {
	return obj instanceof Error && Array.isArray((obj as IErrorWithActions).actions);
}

export function createErrorWithActions(message: string, options: IErrorOptions = Object.create(null)): Error & IErrorWithActions {
	const result = new Error(message);

	if (options.actions) {
		(<IErrorWithActions>result).actions = options.actions;
	}

	return result;
}
