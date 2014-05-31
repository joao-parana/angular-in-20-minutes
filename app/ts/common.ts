module common {
    "use strict";
    export enum Env {
        PRODUCTION, // version from Closure Compiler
        TEST, // version with View for Test
        DEVELOPMENT  // full version
    }
}