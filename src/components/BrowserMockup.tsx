"use client";

interface BrowserMockupProps {
  url: string;
  children: React.ReactNode;
}

export function BrowserMockup({ url, children }: BrowserMockupProps) {
  return (
    <div className="browser-frame">
      <div className="browser-frame-header">
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="browser-dot" />
        <div className="browser-url">{url}</div>
      </div>
      <div>{children}</div>
    </div>
  );
}
