import { render, screen } from "../../../test-utils/testing-library-utils";
import { logRoles } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { Form } from "react-bootstrap";

test("update scoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType={"scoops"} />);

  // subtotal starts out at $0.00
  const scoopsubtotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopsubtotal).toHaveTextContent("0.00");

  // update vanilla scoop to 1, check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsubtotal).toHaveTextContent("2.00");

  // update chocolate scoop to 2, check subtotal
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  expect(scoopsubtotal).toHaveTextContent("6.00");
});
