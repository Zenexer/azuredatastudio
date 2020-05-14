/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as nls from 'vscode-nls';

const localize = nls.loadMessageBundle();

// Placeholder values
export const dataSourcesFileName = 'datasources.json';
export const sqlprojExtension = '.sqlproj';
export const initialCatalogSetting = 'Initial Catalog';
export const schemaCompareExtensionId = 'microsoft.schema-compare';

// UI Strings

export const noOpenProjectMessage = localize('noProjectOpenMessage', "No open database project");
export const projectNodeName = localize('projectNodeName', "Database Project");
export const dataSourcesNodeName = localize('dataSourcesNodeName', "Data Sources");
export const sqlConnectionStringFriendly = localize('sqlConnectionStringFriendly', "SQL connection string");
export const newDatabaseProjectName = localize('newDatabaseProjectName', "New database project name:");
export const sqlDatabaseProject = localize('sqlDatabaseProject', "SQL database project");
export function newObjectNamePrompt(objectType: string) { return localize('newObjectNamePrompt', 'New {0} name:', objectType); }

// Deploy dialog strings

export const deployDialogName = localize('deployDialogName', "Deploy Database");
export const deployDialogOkButtonText = localize('deployDialogOkButtonText', "Deploy");
export const cancelButtonText = localize('cancelButtonText', "Cancel");
export const generateScriptButtonText = localize('generateScriptButtonText', "Generate Script");
export const targetDatabaseSettings = localize('targetDatabaseSettings', "Target Database Settings");
export const databaseNameLabel = localize('databaseNameLabel', "Database");
export const deployScriptNameLabel = localize('deployScriptName', "Deploy script name");
export const targetConnectionLabel = localize('targetConnectionLabel', "Target Connection");
export const editConnectionButtonText = localize('editConnectionButtonText', "Edit");
export const clearButtonText = localize('clearButtonText', "Clear");
export const dataSourceRadioButtonLabel = localize('dataSourceRadioButtonLabel', "Data sources");
export const connectionRadioButtonLabel = localize('connectionRadioButtonLabel', "Connections");
export const selectConnectionRadioButtonsTitle = localize('selectconnectionRadioButtonsTitle', "Specify connection from:");
export const dataSourceDropdownTitle = localize('dataSourceDropdownTitle', "Data source");
export const noDataSourcesText = localize('noDataSourcesText', "No data sources in this project");

// Error messages

export const multipleSqlProjFiles = localize('multipleSqlProjFilesSelected', "Multiple .sqlproj files selected; please select only one.");
export const noSqlProjFiles = localize('noSqlProjFilesSelected', "No .sqlproj file selected; please select one.");
export const noDataSourcesFile = localize('noDataSourcesFile', "No {0} found", dataSourcesFileName);
export const missingVersion = localize('missingVersion', "Missing 'version' entry in {0}", dataSourcesFileName);
export const unrecognizedDataSourcesVersion = localize('unrecognizedDataSourcesVersion', "Unrecognized version: ");
export const unknownDataSourceType = localize('unknownDataSourceType', "Unknown data source type: ");
export const invalidSqlConnectionString = localize('invalidSqlConnectionString', "Invalid SQL connection string");
export const projectNameRequired = localize('projectNameRequired', "Name is required to create a new database project.");
export const projectLocationRequired = localize('projectLocationRequired', "Location is required to create a new database project.");
export const schemaCompareNotInstalled = localize('schemaCompareNotInstalled', "Schema compare extension installation is required to run schema compare");
export function projectAlreadyOpened(path: string) { return localize('projectAlreadyOpened', "Project '{0}' is already opened.", path); }
export function projectAlreadyExists(name: string, path: string) { return localize('projectAlreadyExists', "A project named {0} already exists in {1}.", name, path); }
export function mssqlNotFound(mssqlConfigDir: string) { return localize('mssqlNotFound', "Could not get mssql extension's install location at {0}", mssqlConfigDir); }

// Project script types

export const folderFriendlyName = localize('folderFriendlyName', "Folder");
export const scriptFriendlyName = localize('scriptFriendlyName', "Script");
export const tableFriendlyName = localize('tableFriendlyName', "Table");
export const viewFriendlyName = localize('viewFriendlyName', "View");
export const storedProcedureFriendlyName = localize('storedProcedureFriendlyName', "Stored Procedure");

// SqlProj file XML names
export const ItemGroup = 'ItemGroup';
export const Build = 'Build';
export const Folder = 'Folder';
export const Include = 'Include';
