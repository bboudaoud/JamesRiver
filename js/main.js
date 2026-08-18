"use strict";

import { startDashboard } from "./river.js";

try {
    await startDashboard("./james.json");
}
catch (error) {
    console.error(error);
    document.body.textContent = `Failed to start dashboard: ${error.message}`;
}
