import { render, screen } from "@testing-library/react";
import { Post } from "./Post";

describe("Post", () => {
  it("renders the title correctly", () => {
    render(<Post title="Hallo Welt" />);

    const heading = screen.getByRole("heading", { name: "Hallo Welt" });

    expect(heading).toBeInTheDocument();
  });
});
