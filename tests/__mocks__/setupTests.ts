import { server } from "./server";

// MSW 라이프사이클
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
