import React from "react";
import { MemoryRouter } from "react-router-dom";
import Edit from "../components/Create";
import { render } from "@testing-library/react";

describe("Edit", () => {
  it("renders the edit form component", () => {
    const wrapper = render(
      <MemoryRouter initialEntries={["/edit/2"]}>
        <Edit />
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
