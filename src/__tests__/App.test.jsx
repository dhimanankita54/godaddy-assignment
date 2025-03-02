import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import axios from "axios";
import Home from "../Pages/Home";
import Details from "../Pages/Details";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { vi } from "vitest";

vi.mock("axios");

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useLocation: () => ({
      state: {
        repoData: {
          name: "repo1",
          description: "Test repo 1",
          html_url: "https://github.com/godaddy/repo1",
          language: "JavaScript",
          forks: 10,
          open_issues: 5,
          watchers: 20,
        },
      },
    }),
  };
});

describe("GitHub Repos App", () => {
  test("fetches and displays repository list", async () => {
    const mockRepos = [
      {
        id: 1,
        name: "repo1",
        description: "Test repo 1",
        html_url: "https://github.com/godaddy/repo1",
        language: "JavaScript",
        forks: 10,
        open_issues: 5,
        watchers: 20,
      },
    ];
    axios.get.mockResolvedValue({ data: mockRepos });

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText("1. repo1")).toBeInTheDocument());
  });

  test("navigates to repository details on click", async () => {
    const mockRepos = [
      {
        id: 1,
        name: "repo1",
        description: "Test repo 1",
        html_url: "https://github.com/godaddy/repo1",
        language: "JavaScript",
        forks: 10,
        open_issues: 5,
        watchers: 20,
      },
    ];
    axios.get.mockResolvedValue({ data: mockRepos });

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => expect(screen.getByText("1. repo1")).toBeInTheDocument());
    fireEvent.click(screen.getByText("1. repo1"));

    await waitFor(() => screen.getByText(/repo1/i));
  });

  test("renders repository details page", async () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route
            path="/:id"
            element={<Details />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("repo1")).toBeInTheDocument();
    expect(screen.getByText("Test repo 1")).toBeInTheDocument();
    expect(screen.getByText("Forks: 10")).toBeInTheDocument();
    expect(screen.getByText("Open Issues: 5")).toBeInTheDocument();
    expect(screen.getByText("Watchers: 20")).toBeInTheDocument();
  });


  test("handles back navigation", async () => {
    render(
      <MemoryRouter initialEntries={["/1"]}>
        <Routes>
          <Route path="/:id" element={<Details />} />
        </Routes>
      </MemoryRouter>
    );

    const backButton = screen.getByRole("button", { name: /Back/i });
    expect(backButton).toBeInTheDocument(); 

    fireEvent.click(backButton);

    await waitFor(() => screen.getByText(/repo1/i));
  });
});
