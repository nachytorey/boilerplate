import App from "../../src/pages/index";
describe("App.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<App />);
  });
});
