import * as functions from "firebase-functions";
import { info } from "firebase-functions/lib/logger";

export const helloWorld = functions
  .runWith({ maxInstances: 1 })
  .https.onCall(async (request, context) => {
    info("Hello logs!", { structuredData: true });
  });
