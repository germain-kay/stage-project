import { setupWorker} from "msw/browser";
import { handlers } from "./handlers/_clients.js";

export const worker = setupWorker(...handlers);