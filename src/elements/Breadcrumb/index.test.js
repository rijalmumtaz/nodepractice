import { render } from "@testing-library/react";
import Breadcrumb from "./index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const utils = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );
  const breadcrumb = utils.getByLabelText("breadcrumb");

  return { breadcrumb };
};

test("should have <ol> with className .breadcrumb and containing text Home and House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
