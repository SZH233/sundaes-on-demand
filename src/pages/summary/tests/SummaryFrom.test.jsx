import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryFrom";

test("initial condition", () => {
  render(<SummaryForm />);
  const button = screen.getByRole("button", { name: "Confirm order" });
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to the Terms and Conditions",
  });

  // Initial condition of the check box is unchecked
  expect(checkbox).not.toBeChecked();
  // Initial condition of the button is disabled
  expect(button).toBeDisabled();
});

test("if the check box enable the button", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);
  const checkBox = screen.getByRole("checkbox", {
    name: "I agree to the Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });

  // Button gets enabled after check the checkbox
  await user.click(checkBox);
  expect(button).toBeEnabled();

  // Button gets disabled after uncheck the checkbox
  await user.click(checkBox);
  expect(button).toBeDisabled();
});

test("if the popover window response to mouse hover", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);

  // popover is hidden at the first stage.
  const nullPopover = screen.queryByText(
    /no ice cream will be actually delivered/i
  );
  expect(nullPopover).not.toBeInTheDocument();
  // popover appears when mouse hover;
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popOver = screen.getByText(/no ice cream will be actually delivered/i);
  expect(popOver).toBeInTheDocument();
  // popover hides again after mouse move out
  await user.unhover(termsAndConditions);
  expect(popOver).not.toBeInTheDocument();
});
