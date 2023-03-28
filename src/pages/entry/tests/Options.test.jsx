import { render, screen } from "../../../test-utils/testing-library-utils";

import Options from "../Options";

test("display image for each scooop from the server", async () => {
  render(<Options optionType={"scoops"} />);

  // find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const allScoopText = scoopImages.map((element) => element.alt);
  expect(allScoopText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display iamge for each topping from the server", async () => {
  render(<Options optionType={"toppings"} />);
  // same above tests for toppings
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });
  expect(toppingImages).toHaveLength(3);
  const allToppingText = toppingImages.map((image) => image.alt);
  expect(allToppingText).toEqual(["Cherries topping", "M&Ms topping", "Hot fudge topping"]);
});
