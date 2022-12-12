/**
 * Copyright (c) Space Dynamics Laboratory.
 * The U.S. federal government retains a royalty-free, non-exclusive,
 * non-transferable license to VANTAGE pursuant to 48 CFR 52.227-14
 * (Civilian Agencies) or DFARS 252.227-7014 (Defense Agencies).
 */

// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import "zone.js";
import "zone.js/testing";

import { getTestBed } from "@angular/core/testing";
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from "@angular/platform-browser-dynamic/testing";

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp
  ): {
    <T>(id: string): T;
    keys(): string[];
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// Then we find all the tests.
const context = require.context("./", true, /\.spec\.ts$/);
// And load the modules.
context.keys().forEach(context);
