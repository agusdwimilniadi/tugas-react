import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "./ContactUs";

describe("FormPage", () => {
  test("Render form", () => {
    render(<ContactUs />);
    expect(screen.getByText(/Full Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/)).toBeInTheDocument();
  });

  //   test("Input text name email false value", () => {
  //     render(<FormCoding />);
  //     fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
  //       target: { value: "agusdw1m1ll" },
  //     });

  //     fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
  //       target: { value: "agusdwimill" },
  //     });

  //     expect(
  //       screen.getByText("Nama Lengkap Harus Berupa Huruf")
  //     ).toBeInTheDocument();
  //     expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
  //     expect(screen.getByLabelText(/Nama/)).toHaveValue("agusdw1m1ll");
  //     expect(screen.getByLabelText(/Email/)).toHaveValue("agusdwimill");
  //   });

  //   test("input name email true value", () => {
  //     render(<FormCoding />);
  //     fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), {
  //       target: { value: "AgusDM" },
  //     });
  //     fireEvent.input(screen.getByRole("textbox", { name: /email/i }), {
  //       target: { value: "agusdwimill@gmail.com" },
  //     });

  //     expect(screen.getByLabelText(/Nama/)).toHaveValue("AgusDM");
  //     expect(screen.getByLabelText(/Email/)).toHaveValue("agusdwimill@gmail.com");
  //   });
  test("Input text name email false value", () => {
    render(<ContactUs />);
    fireEvent.input(screen.getByRole("textbox", { name: /nama/ }), {
      target: { value: "agusdw1m1ll" },
    });

    fireEvent.input(screen.getByRole("textbox", { name: /email/ }), {
      target: { value: "agusdwimill" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /pesan/ }), {
      target: { value: "agusdwimill" },
    });

    expect(
      screen.getByText("Nama harus menggunakan huruf saja tanpa angka")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Masukkan email dengan format yang sesuai")
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Full Name/)).toHaveValue("agusdw1m1ll");
    expect(screen.getByLabelText(/Email Address/)).toHaveValue("agusdwimill");
    expect(screen.getByLabelText(/Message/)).toHaveValue("agusdwimill");
  });
});
