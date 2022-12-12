/**
 * Copyright (c) Space Dynamics Laboratory.
 * The U.S. federal government retains a royalty-free, non-exclusive,
 * non-transferable license to VANTAGE pursuant to 48 CFR 52.227-14
 * (Civilian Agencies) or DFARS 252.227-7014 (Defense Agencies).
 */

import { isEmpty } from "lodash-es";

describe("createAsyncAdapter()", () => {
  it("should provide a function for the data", () => {
    expect(isEmpty([])).toBe(true);
    console.log("test")
  });
});
