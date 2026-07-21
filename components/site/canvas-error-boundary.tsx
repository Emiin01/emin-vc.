"use client";

import React from "react";

export class CanvasErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Globe canvas failed to render, falling back:", error);
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}
