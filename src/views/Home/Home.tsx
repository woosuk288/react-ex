import React from "react";
import { Link } from "react-router-dom";

interface HomeProps {}

export default function Home({}: HomeProps) {
  return (
    <div>
      <Link to="/nomad-movie">Nomad movie app</Link>
    </div>
  );
}
