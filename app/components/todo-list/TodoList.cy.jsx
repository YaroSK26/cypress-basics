import React from "react";
import TodoList from "./TodoList";

describe("<TodoList />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoList />);
    cy.contains(/to-do list/i);
    cy.get("input").type("todo one")
    cy.get("ul[data-id='list'] li").should("have.length", 0);
    cy.contains(/todo one/i).should("not.exist");
    cy.get("button").click()
    cy.get("ul[data-id='list'] li").should("have.length", 1);
    cy.contains(/todo one/i)
    cy.get('[data-id="todo one-remove"]').click();
    cy.get("ul[data-id='list'] li").should("have.length", 0);
    cy.contains(/todo one/i).should("not.exist");
  });
});
